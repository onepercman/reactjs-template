import React, { useEffect, useState } from "react"
import { LuArrowDown } from "react-icons/lu"
import { Checkbox } from "../checkbox"
import { Empty } from "../empty"
import { Loader } from "../loader"
import { Pagination, PaginationProps } from "../pagination"
import { ComposedTVProps, ForwardRefWithAsProps, ForwardedRefComponent } from "../types"
import { cn } from "../utils"
import { table } from "./variants"

export interface TableRow extends Readonly<Record<string, unknown>> {
  key?: string
}

export interface TableSort {
  column: string
  direction: "asc" | "desc"
}

export interface TableColumnProps<Row extends TableRow> extends React.ThHTMLAttributes<HTMLTableCellElement> {
  label: React.ReactNode
  key: string
  dataIndex: keyof Row
  sort: boolean
  headAlign?: React.ThHTMLAttributes<HTMLTableCellElement>["align"]
  dataAlign?: React.ThHTMLAttributes<HTMLTableCellElement>["align"]
  enableSort?: boolean
  render(value: any, row: Row, index: number): React.ReactNode
}

export interface TableProps<Row extends TableRow>
  extends React.HTMLAttributes<HTMLTableElement>,
    ComposedTVProps<typeof table> {
  columns?: readonly Partial<TableColumnProps<Row>>[]
  data?: readonly Row[]
  loading?: boolean
  className?: string
  pagination?: PaginationProps
  defaultSelectedKeys?: any[]
  selectedKeys?: any[]
  sort?: TableSort
  emptyElement?: React.ReactNode
  loadingElement?: React.ReactNode
  onSort?(sort?: TableSort): void
  extractKey?(row: Row, index: number): any
  onSelectRow?(row: Row[]): void
}

interface Table extends ForwardedRefComponent {
  <Row extends TableRow>(props: ForwardRefWithAsProps<"div", TableProps<Row>>): React.ReactElement | null
}

function _bootstrap<Row extends TableRow>(
  render: <Row extends TableRow>(
    props: TableProps<Row> & React.HTMLAttributes<HTMLTableElement>,
    ref: React.ForwardedRef<HTMLTableElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLTableElement, TableProps<Row>>(render) as unknown as Table
}

export const Table = _bootstrap(function (
  {
    children,
    columns,
    data = [],
    selectionMode,
    loading,
    pagination,
    selectedKeys,
    defaultSelectedKeys = [],
    sort,
    emptyElement = <Empty />,
    loadingElement = <Loader />,
    onSort,
    extractKey = (r) => r.key,
    onSelectRow,
    className,
    classNames,
    ...props
  },
  ref,
) {
  const styles = table({ selectionMode, className })

  const [selected, setSelected] = useState<any[]>(defaultSelectedKeys)
  const [sortDescriptor, setSortDescriptor] = useState<TableSort>()

  function _isSelected(row: any, index: number) {
    return selected.includes(extractKey(row, index))
  }

  function _onSort(column: string) {
    setSortDescriptor(function (prev) {
      const value: TableSort = {
        column,
        direction: !prev ? "asc" : prev.column !== column ? "asc" : prev.direction === "asc" ? "desc" : "asc",
      }
      onSort && onSort(value)
      return value
    })
  }

  function _selectRow(row: any, index: number) {
    if (!selectionMode) return
    setSelected(function (prev) {
      const key = extractKey(row, index)
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
      const allKeys = data.map((el, index) => extractKey(el as any, index))
      const isAll = prev.length && prev.every((el) => allKeys.includes(el))
      const value = isAll ? [] : allKeys
      onSelectRow && onSelectRow(value)
      return value
    })
  }

  useEffect(() => {
    setSelected(selectedKeys || [])
  }, [selectedKeys])

  useEffect(() => {
    setSortDescriptor(sort)
  }, [sort])

  if (selectionMode === "multiple" && columns) {
    columns = [
      {
        label: (
          <div onClick={toggleAll}>
            <Checkbox size="sm" checked={!!selected.length} indeterminate={data.length !== selected.length} />
          </div>
        ),
        render(_, row, index) {
          return <Checkbox size="sm" checked={_isSelected(row, index)} />
        },
      },
      ...columns,
    ]
  }

  function _renderContainer() {
    if (loading) {
      return (
        <tr>
          <td colSpan={columns?.length || 1} className={styles.td({ className: classNames?.td })}>
            <Loader />
          </td>
        </tr>
      )
    }
    if (!data?.length) {
      return (
        <tr>
          <td colSpan={columns?.length || 1} className={styles.td({ className: classNames?.td })}>
            {emptyElement}
          </td>
        </tr>
      )
    }

    return data.map((row, index) => (
      <tr
        key={row.key || index}
        className={styles.tr({
          className: classNames?.tr,
        })}
        style={{
          animationDelay: index / 20 + "s",
        }}
        onClick={() => _selectRow(row, index)}
      >
        {columns?.map(({ key, className, dataIndex, render, align, dataAlign, ...column }, columnIndex) => (
          <td
            key={key || columnIndex}
            className={styles.td({
              className: cn(classNames?.td, {
                "bg-primary/10 group-hover:bg-primary/20": _isSelected(row, index),
              }),
            })}
            align={align || dataAlign}
            {...column}
          >
            {render ? render(row[dataIndex!], row, index) : (row[dataIndex || ""] as React.ReactNode)}{" "}
          </td>
        ))}
      </tr>
    ))
  }

  return (
    <div className={styles.base({ className: classNames?.base })}>
      <table ref={ref} className={styles.table({ className: classNames?.table })} {...props}>
        {columns?.filter((c) => !!c.label).length ? (
          <thead className={styles.thead({ className: classNames?.thead })}>
            <tr className={styles.trHead({ className: classNames?.trHead })}>
              {columns.map(
                (
                  {
                    key,
                    label,
                    className,
                    dataIndex,
                    render: _,
                    align,
                    enableSort = true,
                    headAlign = "left",
                    ...column
                  },
                  index,
                ) => (
                  <th
                    key={key || (dataIndex as string) || index}
                    className={styles.th({ className: classNames?.th })}
                    align={align ?? headAlign}
                    {...column}
                  >
                    {sort && key && enableSort ? (
                      <div
                        className="inline-flex cursor-pointer select-none items-center gap-2"
                        onClick={() => _onSort(key || "")}
                      >
                        {label}
                        <LuArrowDown
                          className={cn(
                            "inline-block transition-transform",
                            sortDescriptor?.column === key ? "opacity-100" : "opacity-0",
                            sortDescriptor?.direction === "desc" ? "-scale-y-100" : "",
                          )}
                        />
                      </div>
                    ) : (
                      label
                    )}
                  </th>
                ),
              )}
            </tr>
          </thead>
        ) : null}

        <tbody className={styles.tbody({ className: classNames?.tbody })}>
          {_renderContainer()}
          {pagination && (
            <tr className={styles.tr({ className: classNames?.tr })}>
              <td colSpan={columns?.length || 1} className={styles.td({ className: classNames?.td })}>
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
