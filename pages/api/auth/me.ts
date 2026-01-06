import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { verify } from &apos;jsonwebtoken&apos;;
import { prisma } from &apos;@/lib/prisma&apos;;

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &apos;GET&apos;) {
    return res.status(405).json({ error: &apos;Method not allowed&apos; });
  }

  // Get token from cookie
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: &apos;Not authenticated&apos; });
  }

  try {
    // Verify token
    const decoded = verify(token, JWT_SECRET) as { userId: string };

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      // Clear invalid token
      res.setHeader(
        &apos;Set-Cookie&apos;,
        &apos;token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly&apos;
      );
      return res.status(401).json({ error: &apos;User not found&apos; });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(&apos;Auth check error:&apos;, error);
    // Clear invalid token
    res.setHeader(
      &apos;Set-Cookie&apos;,
      &apos;token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly&apos;
    );
    return res.status(401).json({ error: &apos;Invalid token&apos; });
  }
}