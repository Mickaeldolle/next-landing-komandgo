"use client";

import { Message, User } from "@/prisma/generated/client2";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTableColumnHeader } from "@/components/data-table-colomn-header";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// Définir un type qui inclut la relation restaurant
type MessageAssociateUser = Message & {
  User: User; // Une relation avec plusieurs restaurants
};

export const columns: ColumnDef<MessageAssociateUser>[] = [
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
    accessorKey: "name",
    header: () => <div className="text-gray-400 font-normal">Nom</div>,
    cell: (row) => {
      return row.row.original.User.lastname;
    },
  },
  {
    accessorKey: "firstname",
    header: () => <div className="text-gray-400 font-normal">Prénom</div>,
    cell: (row) => {
      return row.row.original.User.firstname;
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-gray-400 font-normal">Email</div>,
    cell: (row) => {
      return row.row.original.User.email;
    },
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-gray-400 font-normal">Téléphone</div>,
    cell: (row) => {
      function formatPhoneNumber(phoneNumber: string | null) {
        if (phoneNumber === null) return;
        return phoneNumber.replace(/(\d{2})(?=\d)/g, "$1 ");
      }
      const formatedPhone = formatPhoneNumber(row.row.original.User.phone);

      return formatedPhone;
    },
  },
  {
    accessorKey: "content",
    header: () => <div className="text-gray-400 font-normal">Message</div>,
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-gray-400 font-normal">Envoyé le</div>,
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      const formattedDate = date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      return <span>{formattedDate}</span>;
    },
  },
];
