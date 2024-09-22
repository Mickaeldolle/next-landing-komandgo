import { NextRequest, NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
import { PrismaClient as PrismaClient2 } from '@/prisma/generated/client2';
const prisma2 = new PrismaClient2();

async function sendContactMessage(req: NextRequest) {
  let body;
  try {
    body = await req.json(); // Assure-toi de parser le body
    const { email, phone, content } = body;
    if(!email || !phone || !content) {
      return NextResponse.json({message: 'Vous devez remplir tous les champs'}, { status: 400})
    }

    const user = await prisma2.user.upsert({ 
      where: {email: body.email},
      create : { email, phone},
      update: { phone}
    })

  await prisma2.message.create({ data: { content: body.content, userId: user.id}})

  } catch (error) {
    console.error('Erreur lors du parsing du body', error);
    return NextResponse.json({ message: 'Une erreur est survenue', error: error }, { status: 400 });
  }
  return NextResponse.json({ message: 'Message envoyé avec succès', body }, { status: 200 });
}


export { sendContactMessage as POST}