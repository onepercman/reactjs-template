import React from "react"
import { HiArrowDown } from "react-icons/hi"
import { Empty } from "../empty"
import { Loader } from "../loader"
import { Pagination, PaginationProps } from "../pagination"
import { cn } from "../utils/className"

interface TableColumnProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  title: string
  key: string
  dataIndex: string
  className?: string
  sort?: boolean
  render?(text: any, record: any, index: number): void
}

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns?: Array<TableColumnProps>
  sort?: string
  onSort?(key: string): void
  reverse?: boolean
  data?: Array<any>
  className?: string
  onSelect?(row: any): void
  loading?: boolean
  tableClassName?: string
  pagination?: PaginationProps
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { columns, data, sort = "", onSort, reverse, onSelect, className, loading, tableClassName, pagination, ...props },
    ref,
  ) => {
    return (
      <div className={cn(className, "scrollbar-none w-full overflow-x-scroll rounded shadow")}>
        <table ref={ref} className={cn("w-full", tableClassName)} {...props}>
          <thead className="border-muted border-b border-solid text-left">
            <tr>
              {columns?.map(({ key, title, ...column }) => (
                <th
                  key={key}
                  className={cn(
                    "text-muted bg-transparent px-4 py-4 text-sm font-medium",
                    sort && "cursor-pointer",
                    className,
                  )}
                  onClick={() => {
                    if (sort && onSort) {
                      onSort(key)
                    }
                  }}
                  {...column}
                >
                  {title}{" "}
                  {sort === key && (
                    <HiArrowDown
                      className={cn(
                        "text-primary ml-2 inline-block text-xs transition-transform",
                        reverse && "rotate-180",
                      )}
                    />
                  )}
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
              <tr key={index} className="group transition-all" onClick={() => onSelect && onSelect(row)}>
                {columns?.map(({ key, ...column }, columnIndex) => (
                  <td
                    key={columnIndex + key}
                    className={cn(
                      "bg-inherit px-4 py-2 font-normal transition-all",
                      onSelect && "group-hover:bg-primary/30 cursor-pointer",
                    )}
                    {...column}
                  >
                    {column.render ? column.render(row[column.dataIndex], row, index) : row[column.dataIndex]}
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
  },
)

Table.displayName = "Table"
