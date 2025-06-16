"use client"

import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const table = tv({
  base: "overflow-auto rounded text-xs",
  slots: {
    table: "w-full border-separate border-spacing-y-1",
    head: "",
    body: "relative",
    column: "bg-default px-4 py-2 font-semibold first:rounded-l last:rounded-r",
    row: "group",
    cell: "bg-component px-4 py-2 font-normal first:rounded-l last:rounded-r",
  },
  variants: {
    size: {
      sm: {
        base: "text-xs",
        column: "px-2 py-1",
        cell: "px-2 py-1",
      },
      md: {
        base: "text-sm",
        column: "px-4 py-1.5",
        cell: "px-4 py-1.5",
      },
      lg: {
        base: "text-base",
        column: "px-6 py-2",
        cell: "px-6 py-2",
      },
    },
    highlightRow: {
      true: {
        cell: "cursor-pointer transition-colors group-hover:bg-default",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(table)

const Root = withRoot("div", "base")
const TableElement = withSlot("table", "table")
const Head = withSlot("thead", "head")
const Body = withSlot("tbody", "body")
const Column = withSlot("th", "column")
const Row = withSlot("tr", "row")
const Cell = withSlot("td", "cell")

export const Wrapper = React.forwardRef<
  React.ElementRef<typeof TableElement>,
  React.ComponentPropsWithoutRef<typeof TableElement> &
    React.ComponentPropsWithoutRef<typeof Root>
>(function (
  { size, highlightRow, className, classNames, children, ...props },
  ref,
) {
  return (
    <Root
      size={size}
      highlightRow={highlightRow}
      className={className}
      classNames={classNames}
    >
      <TableElement ref={ref} {...props}>
        {children}
      </TableElement>
    </Root>
  )
})

Wrapper.displayName = "TableWrapper"

export const Header = React.forwardRef<
  React.ElementRef<typeof Head>,
  React.ComponentPropsWithoutRef<typeof Head>
>(function ({ children, ...props }, ref) {
  return (
    <Head ref={ref} {...props}>
      <Row>{children}</Row>
    </Head>
  )
})

Header.displayName = "TableHeader"

export interface TableProps extends ComposedTVProps<typeof table> {}

export interface TableComponent extends ComponentMetadata {
  (props: TableProps): React.ReactElement | null
}

export const Table = createComponentTree(Wrapper, {
  Root,
  Table: TableElement,
  Head,
  Header,
  Body,
  Column,
  Row,
  Cell,
})

Table.displayName = "Table"
