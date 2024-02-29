import React from "react"
import { Empty } from "../empty"
import { Loader } from "../loader"
import { Pagination, PaginationProps } from "../pagination"
import { cn } from "../utils/className"

interface TableRow extends Readonly<Record<string, unknown>> {
  key?: string
}

interface TableColumnProps<Row extends TableRow> extends React.ThHTMLAttributes<HTMLTableCellElement> {
  label: React.ReactNode
  key: string
  dataIndex: keyof Row
  sort: boolean
  render(value: any, row: Row, index: number): React.ReactNode
}

interface TableProps<Row extends TableRow> extends React.HTMLAttributes<HTMLTableElement> {
  columns?: readonly Partial<TableColumnProps<Row>>[]
  data?: readonly Row[]
  className?: string
  onSelectRow?(row?: Row): void
  loading?: boolean
  tableClassName?: string
  pagination?: PaginationProps
}
interface Table extends ForwardedRefComponent {
  <Row extends TableRow>(props: ForwardRefWithAsProps<"div", TableProps<Row>>): React.ReactElement | null
}

function _generate<Row extends TableRow>(
  render: <Row extends TableRow>(
    props: TableProps<Row> & React.HTMLAttributes<HTMLTableElement>,
    ref: React.ForwardedRef<HTMLTableElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLTableElement, TableProps<Row>>(render) as unknown as Table
}

const Table = _generate(function (
  { columns, data, onSelectRow, className, loading, tableClassName, pagination, ...props },
  ref,
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
            {columns?.map(({ key, label, className, dataIndex, render: _, ...column }, index) => (
              <th
                key={key || (dataIndex as string) || index}
                className={cn("!text-2xs text-muted bg-transparent px-4", className)}
                {...column}
              >
                {label}{" "}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="relative text-left">
          <Loader
            as="tr"
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
              {columns?.map(({ key, className, dataIndex, render, ...column }, columnIndex) => (
                <td
                  key={key || columnIndex}
                  className={cn(
                    "bg-inherit px-4 py-2 transition-all first:rounded-l last:rounded-r",
                    onSelectRow && "group-hover:bg-primary/30 cursor-pointer",
                    className,
                  )}
                  {...column}
                >
                  {render ? render(row[dataIndex!], row, index) : (row[dataIndex || ""] as React.ReactNode)}
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

export { Table }
export type { TableColumnProps, TableProps }
