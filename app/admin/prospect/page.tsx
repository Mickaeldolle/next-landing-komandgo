import { PrismaClient as PrismaClient2 } from "@/prisma/generated/client2";
const prisma2 = new PrismaClient2();
import DataTable from "../../../components/data-table";
import { columns } from "./columns-prospect";

export default async function Prospect() {
  const users = await prisma2.user.findMany();

  return (
    <div className="h-full">
      <DataTable columns={columns} data={users} />
    </div>
  );
}
