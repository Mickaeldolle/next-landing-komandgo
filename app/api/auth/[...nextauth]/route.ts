/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  session: {
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
        where: { email: profile.email },
        create: {
          email: profile.email,
        },
        update: { email: profile.email },
      });
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirige l'utilisateur vers une page spécifique après connexion réussie
      // Ici, on redirige vers "/dashboard" par exemple
      if (url.startsWith(baseUrl)) {
        return `${baseUrl}/welcome`; // Redirection vers la page souhaitée
      } else if (url.startsWith('/')) {
        return `${baseUrl}${url}`; // Redirige vers une page relative
      }
      return baseUrl; // Redirige par défaut vers l'URL de base
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
