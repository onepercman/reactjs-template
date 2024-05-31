import { cn } from "@/libs/tailwind-variants"
import React from "react"

export const TableCellHead = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(function ({ children, className, ...props }, ref) {
  return (
    <th
      ref={ref}
      className={cn(
        "text-secondary border-line border-b px-4 py-2 !text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  )
})

TableCellHead.displayName = "TableCellHead"
