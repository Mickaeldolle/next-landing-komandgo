import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function Contact() {
  const messages = await prisma.message.findMany({ include: { user: true } });
  return <div className="">{JSON.stringify(messages)}</div>;
}
