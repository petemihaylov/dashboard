import { nanoid } from "@reduxjs/toolkit";
import cn from "classnames";

interface Renderable {
  [key: string]: string | number | boolean | React.ReactNode;
}

interface TableProps<T extends Renderable> {
  title: string;
  data: T[];
  columns: Array<{
    header: string;
    key: keyof T;
    render?: (item: T) => React.ReactNode;
  }>;
}

const Table = <T extends { id: number }>({
  title,
  data,
  columns,
}: TableProps<T>) => (
  <div className="overflow-x-auto rounded-xl shadow-md border-[0.5px] border-gray-200">
    <div className="my-4 px-4">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <table className="min-w-full table-auto border-t-[0.5px] border-gray-300 ">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((column) => (
            <th
              key={nanoid()}
              scope="col"
              className="border-b-[0.5px] border-gray-300 px-4 py-2 text-left text-sm text-gray-600 font-semibold"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((item) => (
          <tr
            key={item.id}
            className="hover:bg-gray-100 odd:bg-gray-20 even:bg-gray-50"
          >
            {columns.map((column) => (
              <td
                key={nanoid()}
                className={cn(
                  "px-4 py-2 text-sm text-gray-700",
                  column.render && "whitespace-nowrap"
                )}
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

export default Table;
