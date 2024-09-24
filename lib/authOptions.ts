import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClient2 } from '@/prisma/generated/client2';
import { compareSync } from "bcrypt";

const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

declare module "next-auth" {
  interface User {
    id: string; // ou number, selon votre structure de données
  }
  
  interface Session {
    user: User; // Assurez-vous que cela soit bien lié à l'interface User étendue
  }

  interface Profile {
    given_name?: string | null; // Ajoutez cette ligne
    family_name?: string | null; // Ajoutez cette ligne
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    // Google OAuth provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    
    // Credentials provider for email/password authentication
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }
        
        const { email, password } = credentials;

        // Vérification de l'utilisateur dans la base de données
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          throw new Error('No user found');
        }

        // Vérification du mot de passe avec bcrypt
        if (!user.password) {
          throw new Error('User password is null');
        }
        const isValidPassword = compareSync(password, user.password);
        if (!isValidPassword) {
          throw new Error('Incorrect password');
        }

        // Ensure the returned user object matches the expected User type
        return {
          ...user,
          id: user.id.toString(), // Convert id to string
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Ajoutez l'utilisateur au token JWT si l'utilisateur existe
      if (user) {
        token.id = user.id; // Ajoutez d'autres propriétés si nécessaire
        token.email = user.email; // Ajoutez l'email au token
      }
      return token;
    },
    async session({ session, token }) {
      // Ajoutez l'ID de l'utilisateur et l'email à la session
      if (token) {
        session.user.id = token.id as string; // Assurez-vous que 'user' a un 'id'
          session.user.email = token.email; // Assurez-vous que 'user' a un 'email'
      }
      return session;
    },
    async signIn({ account, profile }) {
      // Vérifiez si l'authentification provient de Google
      if (account?.provider === "google") {
        if (!profile?.email) {
          throw new Error("No email returned from Google");
        }
        // Logique pour gérer l'utilisateur Google
        await prisma.user.upsert({
          where: { email: profile.email },
          create: {
            email: profile.email,
            lastname: profile.family_name ?? null,
            firstname: profile?.given_name ?? null,
          },
          update: { lastname: profile?.name },
        });
        
        // On ajoute aussi dans la db prospect lors d'un nouvel ajout a la db
        await prisma2.user.upsert({
          where: { email: profile.email },
          create: {
            email: profile.email,
            name: profile.name ?? null,
          },
          update: { email: profile.email },
        });
      }
      return true; // Pour toutes les autres connexions (y compris par Credentials)
    },
    async redirect({ url, baseUrl }) {
      // Redirige l'utilisateur vers "/welcome" après connexion réussie
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
