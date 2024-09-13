import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function sendContactMessage(req: NextRequest) {
  let body;
  try {
    body = await req.json(); // Assure-toi de parser le body
    const { email, phone, content } = body;
    if(!email || !phone || !content) {
      return NextResponse.json({message: 'Vous devez remplir tous les champs'}, { status: 400})
    }

    await prisma.user.create({
      data: { 
        email,
        phone,
        Message: {
          create: {
            content: content
          }
        }
       },
    })

  } catch (error) {
    console.error('Erreur lors du parsing du body', error);
    return NextResponse.json({ message: 'Une erreur est survenue', error: error }, { status: 400 });
  }
  return NextResponse.json({ message: 'Message envoyé avec succès', body }, { status: 200 });
}


export { sendContactMessage as POST}