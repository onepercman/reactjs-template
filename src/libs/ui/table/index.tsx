import React from "react"
import { Empty } from "../empty"
import { Loader } from "../loader"
import { Pagination, PaginationProps } from "../pagination"
import { cn } from "../utils/className"

type TableRow = Record<string, any>

interface TableColumnProps<T extends TableRow> extends React.ThHTMLAttributes<HTMLTableCellElement> {
  title: string
  key: string
  dataIndex: string
  sort: boolean
  render(value: T[string], row: any, index: number): void
}

interface TableProps<T extends TableRow> extends React.HTMLAttributes<HTMLTableElement> {
  columns?: readonly Partial<TableColumnProps<T>>[]
  data?: readonly T[]
  className?: string
  onSelectRow?(row?: any): void
  loading?: boolean
  tableClassName?: string
  pagination?: PaginationProps
}

function TableComponent<T extends TableRow>(
  { columns, data, onSelectRow, className, loading, tableClassName, pagination, ...props }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>,
) {
  return (
    <div
      className={cn(
        className,
        "scrollbar scrollbar-track-inherit scrollbar-thumb-inherit w-full overflow-x-auto overflow-y-hidden rounded shadow",
      )}
    >
      <table ref={ref} className={cn("w-full border-separate border-spacing-y-1", tableClassName)} {...props}>
        <thead className="text-left">
          <tr>
            {columns?.map(({ key, title, ...column }, index) => (
              <th
                key={key || title || index}
                className={cn("text-base-content bg-transparent px-4", className)}
                {...column}
              >
                {title}{" "}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="relative text-left">
          <Loader
            className={cn(
              "absolute inset-0 z-20 bg-black/60 backdrop-blur duration-300",
              loading ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          />
          {data?.map((row, index) => (
            <tr
              key={row.key || index}
              className="bg-component animate-tableRow ease-expo group cursor-pointer opacity-0 transition-colors hover:brightness-125"
              style={{
                animationDelay: index / 20 + "s",
              }}
              onClick={() => onSelectRow && onSelectRow(row)}
            >
              {columns?.map(({ key, ...column }, columnIndex) => (
                <td
                  key={key || columnIndex}
                  className={cn(
                    "bg-inherit px-4 py-2 transition-all first:rounded-l last:rounded-r",
                    onSelectRow && "group-hover:bg-primary/30 cursor-pointer",
                  )}
                  {...column}
                >
                  {column.render ? column.render(row[column.dataIndex || ""], row, index) : row[column.dataIndex || ""]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!data?.length && <Empty className={cn(loading && "opacity-0")} />}
      {pagination && (
        <div className="mt-4 inline-flex w-full justify-center">
          <Pagination {...pagination} />
        </div>
      )}
    </div>
  )
}

export const Table = React.forwardRef(TableComponent) as <T extends TableRow>(
  props: TableProps<T> & { ref?: React.ForwardedRef<HTMLTableElement> },
) => ReturnType<typeof TableComponent>
