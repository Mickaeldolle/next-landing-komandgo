import { PrismaClient as PrismaClient2 } from "@/prisma/generated/client2";
const prisma = new PrismaClient2();

export default async function Prospect() {
  const users = await prisma.user.findMany();

  return (
    <div className="">
      <h1>Liste des prospects</h1>
      {JSON.stringify(users)}
    </div>
  );
}
