// Simple type definitions to avoid TypeScript errors
type NextApiRequest = {
  method?: string;
  body?: any;
  query: { [key: string]: string | string[] | undefined };
  cookies: { [key: string]: string };
  headers: { [key: string]: string | string[] | undefined };
};

type NextApiResponse = {
  status: (statusCode: number) => NextApiResponse;
  json: (body: any) => void;
  setHeader: (name: string, value: string | string[]) => void;
  end: () => void;
};

import { compare } from &apos;bcryptjs&apos;;
import { sign } from &apos;jsonwebtoken&apos;;
import { prisma } from &apos;@/lib/prisma&apos;;

type LoginRequest = {
  email: string;
  password: string;
};

const JWT_SECRET = process.env.JWT_SECRET!;
const isProduction = process.env.NODE_ENV === &apos;production&apos;;
const DOMAIN = isProduction ? &apos;.yourdomain.com&apos; : &apos;localhost&apos;;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &apos;POST&apos;) {
    return res.status(405).json({ error: &apos;Method not allowed&apos; });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: &apos;Invalid email or password&apos; });
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: &apos;Invalid email or password&apos; });
    }

    const token = sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: &apos;7d&apos; }
    );

    // Set cookie with Vercel-compatible settings
    res.setHeader(
      &apos;Set-Cookie&apos;,
      `token=${token}; HttpOnly; Path=/; Max-Age=${process.env.SESSION_EXPIRY || 86400}; ${process.env.NODE_ENV === &apos;production&apos; ? &apos;Secure; &apos; : &apos;&apos;}SameSite=Lax${process.env.NODE_ENV === &apos;production&apos; ? &apos;; Domain=yourdomain.com&apos; : &apos;&apos;}`
    );

    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json({ user: userWithoutPassword });
  } catch (error) {
    console.error(&apos;Login error:&apos;, error);
    return res.status(500).json({ error: &apos;Internal server error&apos; });
  }
}
