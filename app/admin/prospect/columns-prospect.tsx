"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import DropDownMenuActionProspect from "@/components/DropDownOptionsProspect";
import { User } from "@/prisma/generated/client2";
import { DataTableColumnHeader } from "@/components/data-table-colomn-header";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: unknown) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "lastname",
    header: () => <div className="text-gray-400 font-normal">Nom</div>,
  },
  {
    accessorKey: "firstname",
    header: () => <div className="text-gray-400 font-normal">Prénom</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-gray-400 font-normal">Email</div>,
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-gray-400 font-normal">Téléphone</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-gray-400 font-normal">Status</div>,
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-gray-400 font-normal">Inscrit le</div>,
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      const formattedDate = date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      return <span>{formattedDate}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DropDownMenuActionProspect row={row} />;
    },
  },
];
