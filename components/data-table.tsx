"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  getSortedRowModel,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useState } from "react";
import { DataTablePagination } from "./data-table-pagination";
import { SlidersHorizontal } from "lucide-react";
import AddProspectBtn from "@/app/admin/prospect/add-prospect-btn";
import { useScreenStore } from "@/store/screenWidth.store";

interface DataWithDetails {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  Company: Company;
}

interface DataTableProps<User, TValue> {
  columns: ColumnDef<User, TValue>[];
  data: User[];
}

export default function DataTable<TData extends DataWithDetails, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const screenWidth = useScreenStore();
  console.log(screenWidth.width);
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex w-full justify-between my-2">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-60"
        />
        <div className="items-base">
          <AddProspectBtn />
          {screenWidth.width > 768 && <ButtonView table={table} />}
        </div>
      </div>
      {screenWidth.width > 768 ? (
        <DataTableDesktop<TData, TValue> table={table} columns={columns} />
      ) : (
        <DataTableMobile table={table} columns={columns} />
      )}
    </div>
  );
}

import { Table as ReactTable } from "@tanstack/react-table";
import { Company } from "@/prisma/prospect/generated/client2";
import Link from "next/link";

interface ButtonViewProps<TData> {
  table: ReactTable<TData>;
}

function ButtonView<TData>({ table }: ButtonViewProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-2">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface DataTableDesktopProps<TData, TValue> {
  table: ReactTable<TData>;
  columns: ColumnDef<TData, TValue>[];
}

function DataTableDesktop<TData, TValue>({
  table,
  columns,
}: DataTableDesktopProps<TData, TValue>) {
  return (
    <div className="rounded-md border h-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
}

interface DataTableMobileProps<TData, TValue> {
  table: ReactTable<TData>;
  columns: ColumnDef<TData, TValue>[];
}

function DataTableMobile<TData extends DataWithDetails, TValue>({
  table,
}: DataTableMobileProps<TData, TValue>) {
  const filteredData = table.getRowModel().rows.map((row) => row.original);
  return (
    <ul className="flex flex-col gap-y-2 w-full">
      {filteredData.length > 0 ? (
        filteredData.map((list) => (
          <Link
            href={`/admin/user/${list.id}`}
            className="flex flex-col border rounded-md p-4 hover:bg-gray-200"
            key={list.email}
          >
            <span>{list.email}</span>
            <span>{list.Company?.name}</span>
            <span>
              {list.lastname} {list.firstname}
            </span>
          </Link>
        ))
      ) : (
        <li className="text-center">No results.</li>
      )}
    </ul>
  );
}
