/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcrypt'
const prisma = new PrismaClient();

async function createPassword(req: NextRequest) {
  const session = await getServerSession()
  const body = await req.json();
  if(session?.user?.email) {
    const password = body.password;
    const hashedPassword = bcrypt.hashSync(password, 8)
    try {
    await prisma.user.update({ where : { email : session.user.email}, data: { password: hashedPassword, manual_active: true}})

    return NextResponse.json({ message: 'Mot de passe créé !' }, { status: 200 });
    
  } catch (error) {
      console.error('error => ', error);
      return NextResponse.json({ message: 'Une erreur est survenue', error: error }, { status: 400 });
    }
  }

  return NextResponse.json({ message: 'Une erreur s\'est produite' }, { status: 400 });
}


export { createPassword as PUT}