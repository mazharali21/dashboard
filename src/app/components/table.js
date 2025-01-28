"use client";

import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const data = [
  { id: "2.A", title: "Report 2.A", status: "Draft", updatedAt: "2024-12-10 04:34:56 PT", sentTime: "N/A" },
  { id: "1.B", title: "Report 1.B", status: "Sent", updatedAt: "2024-12-10 05:36:57 PT", sentTime: "N/A" },
  { id: "1.A", title: "Report 1.A", status: "Sent", updatedAt: "2024-12-10 04:36:57 PT", sentTime: "N/A" },
];

const columns = [
  { accessorKey: "id", header: "Incident Reports" },
  { accessorKey: "title", header: "Report Title" },
  { 
    accessorKey: "status", 
    header: "Status", 
    cell: ({ getValue }) => {
      const status = getValue();
      return (
        <span className={`px-2 py-1 rounded text-white text-xs ${status === "Draft" ? "bg-green-500" : "bg-orange-500"}`}>
          {status}
        </span>
      );
    },
  },
  { accessorKey: "updatedAt", header: "Updated At" },
  { accessorKey: "sentTime", header: "Sent Time" },
  { 
    accessorKey: "action", 
    header: "Action", 
    cell: () => <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">Edit Incident</button>
  },
];

const DeploymentReports = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <div className="overflow-x-auto"> 
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="border border-gray-300 px-4 py-2 text-left">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="border border-gray-300">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border border-gray-300 px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeploymentReports;
