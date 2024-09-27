import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClient2 } from '@/prisma/prospect/generated/client2';
const prisma = new PrismaClient();
const prisma2 = new PrismaClient2();

async function handler(req: NextRequest) {
  let body;
  try {
    body = await req.json();
    const { company, user, ...prospect} = body;
    let companyCreated;
    if(company) {
      companyCreated = await prisma2.company.create({
        data: { name: company }
      })
    }
    if(prospect && companyCreated) {
      await prisma2.user.create({
        data: {...prospect, companyId: companyCreated.id} 
      });
      
      if(user) {
        await prisma.user.create({
          data: prospect
        })
      }
    }
  } catch (error) {
    console.error('Erreur lors du parsing du body', error);
    return NextResponse.json({ message: 'Une erreur est survenue', error: error }, { status: 400 });
  }
  return NextResponse.json({ message: 'Prospect créé !', body }, { status: 200 });
}


export { handler as POST}