import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { PrismaClient as PrismaClient2 } from '@/prisma/generated/client2';
const prisma2 = new PrismaClient2();

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
    async signIn({ profile }) {
      if (!profile?.email) {
        throw new Error("No email returned from Google");
      }
      await prisma.user.upsert({
        where: { email: profile.email },
        create: {
          email: profile.email,
          lastname: profile.name,
        },
        update: { email: profile.email },
      });
      
      // On ajoute aussi dans la db prospect lors d'un nouvel ajout a la db
      await prisma2.user.upsert({
        where: { email: profile.email },
        create: {
          email: profile.email,
          name: profile.name,
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


export default authOptions;