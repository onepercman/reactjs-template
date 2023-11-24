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
  dataKey?: string
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(function (
  {
    columns,
    data,
    sort = "",
    onSort,
    reverse,
    onSelect,
    className,
    loading,
    tableClassName,
    pagination,
    dataKey,
    ...props
  },
  ref,
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
                key={key}
                className={cn(
                  "text-base-content bg-transparent px-4 !text-[11px] font-light",
                  sort && "cursor-pointer",
                  index === columns?.length - 1 && "text-right",
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
            <tr
              key={dataKey ? row[dataKey] || index : index}
              className="bg-component animate-tableRow ease-expo group cursor-pointer opacity-0 transition-colors hover:brightness-125"
              style={{
                animationDelay: index / 20 + "s",
              }}
              onClick={() => onSelect && onSelect(row)}
            >
              {columns?.map(({ key, ...column }, columnIndex) => (
                <td
                  key={columnIndex + key}
                  className={cn(
                    "bg-inherit px-4 py-2 font-light transition-all first:rounded-l last:rounded-r",
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
})

Table.displayName = "Table"
