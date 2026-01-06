import { sign, verify } from &apos;jsonwebtoken&apos;;
import { SignJWT, jwtVerify } from &apos;jose&apos;;
import { User, UserWithoutPassword } from &apos;@/types/user&apos;;
import { NextApiRequest } from &apos;next&apos;;

const COOKIE_NAME = &apos;auth-token&apos;;
const JWT_SECRET = process.env.JWT_SECRET || &apos;your-secret-key&apos;;
const JWT_EXPIRES_IN = &apos;30d&apos;;

// Type for cookie options
interface CookieOptions {
  httpOnly: boolean;
  secure: boolean;
  sameSite: &apos;strict&apos; | &apos;lax&apos; | &apos;none&apos;;
  maxAge: number;
  path: string;
}

export async function hashPassword(password: string): Promise<string> {
  const bcrypt = await import(&apos;bcryptjs&apos;);
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const bcrypt = await import(&apos;bcryptjs&apos;);
  return bcrypt.compare(password, hashedPassword);
}

export async function createToken(user: UserWithoutPassword): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET);
  const token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: &apos;HS256&apos; })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRES_IN)
    .sign(secret);
  
  return token;
}

export async function setAuthCookie(token: string): Promise<void> {
  // This function is not used in API routes
  throw new Error(&apos;setAuthCookie should not be called in API routes&apos;);
}

export async function removeAuthCookie(): Promise<void> {
  // This function is not used in API routes
  throw new Error(&apos;removeAuthCookie should not be called in API routes&apos;);
}

export async function getCurrentUser(req: NextApiRequest): Promise<UserWithoutPassword | null> {
  try {
    const token = req.cookies[COOKIE_NAME];
    
    if (!token) return null;
    
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    
    return payload as UserWithoutPassword;
  } catch (error) {
    console.error(&apos;Error verifying token:&apos;, error);
    return null;
  }
}

export async function verifyToken(token: string): Promise<UserWithoutPassword | null> {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload as UserWithoutPassword;
  } catch (error) {
    console.error(&apos;Error verifying token:&apos;, error);
    return null;
  }
}
