"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserWithRestaurant } from "@/@types/User.database1";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import DropDownMenuActionUser from "@/components/DropDownOptionsUser";
import { DataTableColumnHeader } from "@/components/data-table-colomn-header";

export const columns: ColumnDef<UserWithRestaurant>[] = [
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
    accessorKey: "restaurant",
    // Permet le tri des colonnes toggle asc/desc
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nb POS" />
    ),
    cell: (row) => {
      return JSON.stringify(row.row.original.restaurant?.length ?? "null");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DropDownMenuActionUser row={row} />;
    },
  },
];
