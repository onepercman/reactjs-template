import React, { useEffect, useState } from "react"
import { LuArrowDown } from "react-icons/lu"
import { Input } from "../input"
import { Pagination, PaginationProps } from "../pagination"
import { Spinner } from "../spinner"
import {
  ComposedTVProps,
  ForwardRefWithAsProps,
  ForwardedRefComponent,
} from "../types"
import { cn } from "../utils/cn"
import { table } from "../variants"

export interface TableRow extends Readonly<Record<string, unknown>> {
  key?: string
}

export interface TableSort {
  column: string
  direction: "asc" | "desc"
}

export interface TableColumnProps<Row extends TableRow>
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
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
  onSort?(sort?: TableSort): void
  extractKey?(row: Row): any
  onSelectRow?(row: Row[]): void
}

interface Table extends ForwardedRefComponent {
  <Row extends TableRow>(
    props: ForwardRefWithAsProps<"div", TableProps<Row>>,
  ): React.ReactElement | null
}

function _constructor<Row extends TableRow>(
  render: <Row extends TableRow>(
    props: TableProps<Row> & React.HTMLAttributes<HTMLTableElement>,
    ref: React.ForwardedRef<HTMLTableElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLTableElement, TableProps<Row>>(
    render,
  ) as unknown as Table
}

export const Table = _constructor(function (
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

  function _isSelected(row: any) {
    return selected.includes(extractKey(row))
  }

  function _onSort(column: string) {
    setSortDescriptor(function (prev) {
      const value: TableSort = {
        column,
        direction: !prev
          ? "asc"
          : prev.column !== column
            ? "asc"
            : prev.direction === "asc"
              ? "desc"
              : "asc",
      }
      onSort && onSort(value)
      return value
    })
  }

  function _selectRow(row: any) {
    if (!selectionMode) return
    setSelected(function (prev) {
      const key = extractKey(row)
      let value
      if (selectionMode === "multiple") {
        value = prev.includes(key)
          ? prev.filter((e) => e !== key)
          : prev.concat(key)
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

  useEffect(() => {
    setSortDescriptor(sort)
  }, [sort])

  if (selectionMode === "multiple" && columns) {
    columns = [
      {
        label: (
          <div onClick={toggleAll}>
            <Input.Checkbox
              size="sm"
              checked={!!selected.length}
              indeterminate={data.length !== selected.length}
            />
          </div>
        ),
        render(_, row) {
          return <Input.Checkbox size="sm" checked={_isSelected(row)} />
        },
      },
      ...columns,
    ]
  }

  function _renderContainer() {
    if (loading) {
      return (
        <tr>
          <td
            colSpan={columns?.length || 1}
            className={styles.td({ class: classNames?.td })}
          >
            <div className="min-h-24 w-full">
              <Spinner />
            </div>
          </td>
        </tr>
      )
    }
    if (!data?.length) {
      return (
        <tr>
          <td
            colSpan={columns?.length || 1}
            className={styles.td({ class: classNames?.td })}
          ></td>
        </tr>
      )
    }

    return data.map((row, index) => (
      <tr
        key={row.key || index}
        className={styles.tr({
          className: _isSelected(row) ? "bg-default" : "",
          class: classNames?.tr,
        })}
        style={{
          animationDelay: index / 20 + "s",
        }}
        onClick={() => _selectRow(row)}
      >
        {columns?.map(
          (
            { key, className, dataIndex, render, align, dataAlign, ...column },
            columnIndex,
          ) => (
            <td
              key={key || columnIndex}
              className={styles.td({ class: classNames?.td })}
              align={align || dataAlign}
              {...column}
            >
              {render
                ? render(row[dataIndex!], row, index)
                : (row[dataIndex || ""] as React.ReactNode)}
            </td>
          ),
        )}
      </tr>
    ))
  }

  return (
    <div className={styles.base({ class: classNames?.base })}>
      <table
        ref={ref}
        className={styles.table({ class: classNames?.table })}
        {...props}
      >
        {columns?.filter((c) => !!c.label).length ? (
          <thead>
            <tr className={styles.trHead({ class: classNames?.trHead })}>
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
                    className={styles.th({ class: classNames?.th })}
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
                            sortDescriptor?.column === key
                              ? "opacity-100"
                              : "opacity-0",
                            sortDescriptor?.direction === "desc"
                              ? "-scale-y-100"
                              : "",
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

        <tbody className="relative divide-y divide-line text-left">
          {_renderContainer()}
          {pagination && (
            <tr className={styles.tr({ class: classNames?.tr })}>
              <td
                colSpan={columns?.length || 1}
                className={styles.td({ class: classNames?.td })}
              >
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
