/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  session : {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No email returned from Google");
      }
      await prisma.user.upsert({
        where :{ email: profile.email },
        create: {
          email: profile.email,
          name: profile.name,
        },
        update: { email: profile.email },
      });

      return true; 
    }
  },  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
