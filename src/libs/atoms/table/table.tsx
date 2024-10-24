import React from "react"
import { createComponentTree, createCtx } from "../utils"
import { table } from "./variants"

const { withRoot, withSlot } = createCtx(table)

const Root = withRoot("div", "base")
const Table = withSlot("table", "table")
const Head = withSlot("thead", "head")
const Body = withSlot("tbody", "body")
const Column = withSlot("th", "column")
const Row = withSlot("tr", "row")
const Cell = withSlot("td", "cell")

export const Wrapper = React.forwardRef<
  React.ComponentRef<typeof Table>,
  React.ComponentProps<typeof Table> & React.ComponentProps<typeof Root>
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
      <Table ref={ref} {...props}>
        {children}
      </Table>
    </Root>
  )
})

Wrapper.displayName = "TableWrapper"

export const Header = React.forwardRef<
  React.ComponentRef<typeof Head>,
  React.ComponentProps<typeof Head>
>(function ({ children, ...props }, ref) {
  return (
    <Head ref={ref} {...props}>
      <Row>{children}</Row>
    </Head>
  )
})

Header.displayName = "TableHeader"

export const Component = createComponentTree(Wrapper, {
  Root,
  Table,
  Head,
  Header,
  Body,
  Column,
  Row,
  Cell,
})

Root.displayName = "Table"
