/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient as PrismaClient2 } from '@/prisma/prospect/generated/client2';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcrypt'
const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

async function updateUser(req: NextRequest) {
  const session = await getServerSession()
  const body = await req.json();
  if(session?.user?.email) {
    if(body.password) {
      const password = body.password;
      const hashedPassword = bcrypt.hashSync(password, 10)
      body.password = hashedPassword;
    }
    try {
      await prisma2.user.update({ where : { email : session.user.email}, data: body})
      await prisma.user.update({ where : { email : session.user.email}, data: body})
  } catch (error) {
    return NextResponse.json({ message: 'Une erreur est survenue', error: error }, { status: 400 });
  }
    return NextResponse.json({ message: 'User successfuly updated !' }, { status: 200 });
  }

  return NextResponse.json({ message: 'Une erreur s\'est produite' }, { status: 400 });
}


export { updateUser as PUT}