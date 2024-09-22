import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Prospect() {
  const users = await prisma.user.findMany();

  return (
    <div className="">
      <h1>Liste des utilisateurs</h1>
      {JSON.stringify(users)}
      {JSON.stringify(users)}

      {JSON.stringify(users)}
      {JSON.stringify(users)}
      {JSON.stringify(users)}
      {JSON.stringify(users)}
      {JSON.stringify(users)}
    </div>
  );
}
