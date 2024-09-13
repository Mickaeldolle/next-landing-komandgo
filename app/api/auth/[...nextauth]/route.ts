/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { Account, NextAuthOptions, Session as NextAuthSession } from "next-auth";

interface Session extends NextAuthSession {
  accessToken?: string;
}
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session : {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // authorization: {
      //   params: {
      //     scope: "openid email profile https://www.googleapis.com/auth/user.phonenumbers.read",
      //   },
      // },
    }),
  ],
  callbacks: {
    // async jwt({ token, account }: { token: JWT; account: Account | null }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },

    // async session({ session, token }) {
    //   // Associer l'accessToken à la session utilisateur
    //   (session as Session).accessToken = token.accessToken as string;
    //   return session;
    // },

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
