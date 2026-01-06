import { User as PrismaUser } from &apos;@prisma/client&apos;

declare module &apos;next-auth&apos; {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image?: string
    }
  }
  
  interface User extends PrismaUser {}
}

declare module &apos;next-auth/jwt&apos; {
  interface JWT {
    id: string
    email: string
    name: string
  }
}
