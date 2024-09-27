import DataTable from "@/components/data-table";
import { PrismaClient as PrismaClient2 } from "@/prisma/prospect/generated/client2";
import { columns } from "./colomns-contact";
const prisma2 = new PrismaClient2();

export default async function Contact() {
  const messages = await prisma2.message.findMany({
    include: { User: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="h-full">
      <DataTable columns={columns} data={messages} />
    </div>
  );
}
