import { PrismaClient } from "@prisma/client";
import DataTable from "../../../components/data-table";
import { columns } from "./columns-user";
const prisma = new PrismaClient();

export default async function Prospect() {
  const users = await prisma.user.findMany({ include: { restaurant: true } });

  return (
    <div className="">
      <DataTable columns={columns} data={users} />
    </div>
  );
}
