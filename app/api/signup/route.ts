import { NextRequest, NextResponse } from 'next/server';
import { hashSync } from 'bcrypt';

import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClient2 } from '@/prisma/generated/client2';
const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

export async function POST(request: NextRequest) {
  // if (request.method !== 'POST') {
  //   return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  // }

  const { email, password } = await request.json();

  console.log(email, password)
  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma2.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'Oups... Une erreur est survenue.' }, { status: 400 });
    }

    // Hacher le mot de passe
    const hashedPassword = hashSync(password, 10);

    // Créer un nouvel utilisateur dans la base de données de l'app
    await prisma2.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    // On créé aussi un utilisateur dans la db prospect
    return NextResponse.json({ message: 'User created' }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}

