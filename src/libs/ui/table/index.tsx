import { Empty } from "@/libs/ui/empty"
import { Loader } from "@/libs/ui/loader"
import { Pagination, PaginationProps } from "@/libs/ui/pagination"
import { table } from "@/libs/ui/theme"
import React, { useEffect, useState } from "react"
import { VariantProps } from "tailwind-variants"
import { Input } from "../input"

interface TableRow extends Readonly<Record<string, unknown>> {
  key?: string
}

interface TableColumnProps<Row extends TableRow> extends React.ThHTMLAttributes<HTMLTableCellElement> {
  label: React.ReactNode
  key: string
  dataIndex: keyof Row
  sort: boolean
  headAlign?: React.ThHTMLAttributes<HTMLTableCellElement>["align"]
  dataAlign?: React.ThHTMLAttributes<HTMLTableCellElement>["align"]
  render(value: any, row: Row, index: number): React.ReactNode
}

interface TableProps<Row extends TableRow> extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof table> {
  columns?: readonly Partial<TableColumnProps<Row>>[]
  data?: readonly Row[]
  className?: string
  loading?: boolean
  pagination?: PaginationProps
  defaultSelectedKeys?: any[]
  selectedKeys?: any[]
  extractKey?(row: Row): any
  onSelectRow?(row: Row[]): void
}
interface Table extends ForwardedRefComponent {
  <Row extends TableRow>(props: ForwardRefWithAsProps<"div", TableProps<Row>>): React.ReactElement | null
}

function _constructor<Row extends TableRow>(
  render: <Row extends TableRow>(
    props: TableProps<Row> & React.HTMLAttributes<HTMLTableElement>,
    ref: React.ForwardedRef<HTMLTableElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLTableElement, TableProps<Row>>(render) as unknown as Table
}

const Table = _constructor(function (
  {
    children,
    columns,
    data = [],
    selectionMode,
    className,
    loading,
    pagination,
    selectedKeys,
    defaultSelectedKeys = [],
    extractKey = (r) => r.key,
    onSelectRow,
    ...props
  },
  ref,
) {
  const [selected, setSelected] = useState<any[]>(defaultSelectedKeys)

  function _isSelected(row: any) {
    return selected.includes(extractKey(row))
  }

  function _selectRow(row: any) {
    if (!selectionMode) return
    setSelected(function (prev) {
      const key = extractKey(row)
      let value
      if (selectionMode === "multiple") {
        value = prev.includes(key) ? prev.filter((e) => e !== key) : prev.concat(key)
      } else {
        value = prev.includes(key) ? [] : [key]
      }
      onSelectRow && onSelectRow(value)
      return value
    })
  }

  function toggleAll() {
    setSelected(function (prev) {
      const allKeys = data.map((el) => extractKey(el as any))
      const isAll = prev.length && prev.every((el) => allKeys.includes(el))
      const value = isAll ? [] : allKeys
      onSelectRow && onSelectRow(value)
      return value
    })
  }

  useEffect(() => {
    setSelected(selectedKeys || [])
  }, [selectedKeys])

  if (selectionMode === "multiple" && columns) {
    columns = [
      {
        label: (
          <div onClick={toggleAll}>
            <Input.Checkbox size="sm" checked={!!selected.length} indeterminate={data.length !== selected.length} />
          </div>
        ),
        render(_, row) {
          return <Input.Checkbox size="sm" checked={_isSelected(row)} />
        },
      },
      ...columns,
    ]
  }

  const classes = table({ selectionMode, className })

  function _renderContainer() {
    if (loading) {
      return (
        <tr>
          <td colSpan={columns?.length || 1} className={classes.td()}>
            <Loader />
          </td>
        </tr>
      )
    }
    if (!data?.length) {
      return (
        <tr>
          <td colSpan={columns?.length || 1} className={classes.td()}>
            <Empty />
          </td>
        </tr>
      )
    }

    return data.map((row, index) => (
      <tr
        key={row.key || index}
        className={classes.tr({ className: _isSelected(row) ? "bg-default" : "" })}
        style={{
          animationDelay: index / 20 + "s",
        }}
        onClick={() => _selectRow(row)}
      >
        {columns?.map(({ key, className, dataIndex, render, align, dataAlign, ...column }, columnIndex) => (
          <td key={key || columnIndex} className={classes.td()} align={align || dataAlign} {...column}>
            {render ? render(row[dataIndex!], row, index) : (row[dataIndex || ""] as React.ReactNode)}
          </td>
        ))}
      </tr>
    ))
  }

  return (
    <div className={classes.base()}>
      <table ref={ref} className={classes.table()} {...props}>
        {columns?.filter((c) => !!c.label).length ? (
          <thead>
            <tr className={classes.trHead()}>
              {columns.map(
                ({ key, label, className, dataIndex, render: _, align, headAlign = "left", ...column }, index) => (
                  <th
                    key={key || (dataIndex as string) || index}
                    className={classes.th()}
                    align={align ?? headAlign}
                    {...column}
                  >
                    {label}{" "}
                  </th>
                ),
              )}
            </tr>
          </thead>
        ) : null}

        <tbody className="divide-line relative divide-y text-left">
          {_renderContainer()}
          {pagination && (
            <tr className={classes.tr()}>
              <td colSpan={columns?.length || 1} className={classes.td()}>
                <div className="flex w-full justify-end">
                  <div className="sticky left-0 right-0 w-fit px-4 py-2">
                    <Pagination {...pagination} />
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
        {children}
      </table>
    </div>
  )
})

Table.displayName = "Table"

export { Table }
export type { TableColumnProps, TableProps }
