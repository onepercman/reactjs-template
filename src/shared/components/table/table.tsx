"use client"

import React from "react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { table } from "./variants"

const { withRoot, withSlot } = createComponentFactory(table)

const Root = withRoot("div", "base")
const Table = withSlot("table", "table")
const Head = withSlot("thead", "head")
const Body = withSlot("tbody", "body")
const Column = withSlot("th", "column")
const Row = withSlot("tr", "row")
const Cell = withSlot("td", "cell")

export const Wrapper = React.forwardRef<
  React.ElementRef<typeof Table>,
  React.ComponentPropsWithoutRef<typeof Table> &
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
      <Table ref={ref} {...props}>
        {children}
      </Table>
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
