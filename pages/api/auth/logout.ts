import { NextApiRequest, NextApiResponse } from &apos;next&apos;;

const isProduction = process.env.NODE_ENV === &apos;production&apos;;
const DOMAIN = isProduction ? &apos;.yourdomain.com&apos; : &apos;localhost&apos;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &apos;POST&apos;) {
    return res.status(405).json({ error: &apos;Method not allowed&apos; });
  }

  try {
    // Clear the token cookie
    res.setHeader(
      &apos;Set-Cookie&apos;,
      `token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; ${
        isProduction ? &apos;Secure; &apos; : &apos;&apos;
      }SameSite=${isProduction ? &apos;none&apos; : &apos;lax&apos;}${
        isProduction ? `; Domain=${DOMAIN}` : &apos;&apos;
      }`
    );

    return res.status(200).json({ message: &apos;Logged out successfully&apos; });
  } catch (error) {
    console.error(&apos;Logout error:&apos;, error);
    return res.status(500).json({ error: &apos;Internal server error&apos; });
  }
}