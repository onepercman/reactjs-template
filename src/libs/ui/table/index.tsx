import React from "react"
import { Empty } from "../empty"
import { Loader } from "../loader"
import { Pagination, PaginationProps } from "../pagination"
import { cn } from "../utils/className"

interface TableRow extends Readonly<Record<string, unknown>> {
  key?: string
}

interface TableColumnProps<Row extends TableRow> extends React.ThHTMLAttributes<HTMLTableCellElement> {
  title: string
  key: string
  dataIndex: keyof Row
  sort: boolean
  render(value: Row[keyof Row], row: Row, index: number): React.ReactNode
}

interface TableProps<Row extends TableRow> extends React.HTMLAttributes<HTMLTableElement> {
  columns?: readonly Partial<TableColumnProps<Row>>[]
  data?: Row[]
  className?: string
  onSelectRow?(row?: Row): void
  loading?: boolean
  tableClassName?: string
  pagination?: PaginationProps
}

function _render<Row extends TableRow>(
  { columns, data, onSelectRow, className, loading, tableClassName, pagination, ...props }: TableProps<Row>,
  ref: React.ForwardedRef<HTMLTableElement>,
) {
  return (
    <div
      className={cn(
        className,
        "scrollbar scrollbar-track-inherit scrollbar-thumb-inherit w-full overflow-x-auto overflow-y-hidden rounded",
      )}
    >
      <table ref={ref} className={cn("w-full border-separate border-spacing-y-1", tableClassName)} {...props}>
        <thead className="text-left">
          <tr>
            {columns?.map(({ key, title, className, ...column }, index) => (
              <th
                key={key || title || index}
                className={cn("!text-2xs text-muted bg-transparent px-4", className)}
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
              "bg-body/60 absolute inset-0 z-20 rounded backdrop-blur duration-300",
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
              {columns?.map(({ key, className, ...column }, columnIndex) => (
                <td
                  key={key || columnIndex}
                  className={cn(
                    "bg-inherit px-4 py-2 transition-all first:rounded-l last:rounded-r",
                    onSelectRow && "group-hover:bg-primary/30 cursor-pointer",
                    className,
                  )}
                  {...column}
                >
                  {column.render
                    ? column.render(row[column.dataIndex as keyof Row], row, index)
                    : (row[column.dataIndex || ""] as React.ReactNode)}
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

export const Table = React.forwardRef(_render) as <Row extends TableRow>(
  props: TableProps<Row> & React.RefAttributes<HTMLTableElement>,
) => ReturnType<typeof _render>
