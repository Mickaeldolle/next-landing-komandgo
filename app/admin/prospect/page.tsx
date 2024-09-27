import { PrismaClient as PrismaClient2 } from "@/prisma/prospect/generated/client2";
const prisma2 = new PrismaClient2();
import DataTable from "../../../components/data-table";
import { columns } from "./columns-prospect";
import { ScreenWidthProvider } from "@/provider/ScreenWidth.provider";

export default async function Prospect() {
  const users = await prisma2.user.findMany({ include: { Company: true } });

  return (
    <div className="h-full">
      <ScreenWidthProvider>
        <DataTable columns={columns} data={users} />
      </ScreenWidthProvider>
    </div>
  );
}
