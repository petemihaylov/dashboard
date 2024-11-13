import React from "react";

interface Renderable {
  [key: string]: string | number | boolean | React.ReactNode;
}

interface PriceTableProps<T extends Renderable> {
  title: string;
  data: T[];
  columns: Array<{
    header: string;
    key: keyof T;
    render?: (item: T) => React.ReactNode;
  }>;
}

const PriceTable = <T extends { id: number }>({
  title,
  data,
  columns,
}: PriceTableProps<T>) => (
  <div className="overflow-x-auto">
    <h2 className="text-2xl text-white mb-4">{title}</h2>
    <table className="w-full border-collapse border border-white/20">
      <thead>
        <tr className="bg-black/20">
          {columns.map((column) => (
            <th
              key={column.key.toString()}
              scope="col"
              className="border border-white/20 px-4 py-2 text-left text-white"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className={`${item.id % 2 === 0 ? "bg-white/5" : "bg-white/10"}`}
          >
            {columns.map((column) => (
              <td
                key={`${item.id}-${column.key.toString()}`}
                className="border border-white/20 px-4 py-2 text-white"
              >
                {column.render
                  ? column.render(item)
                  : (item[column.key] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PriceTable;
