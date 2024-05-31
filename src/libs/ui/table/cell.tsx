import { cn } from "@/libs/tailwind-variants"
import React from "react"

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(function (
  { children, className, ...props },
  ref,
) {
  return (
    <td ref={ref} className={cn("px-4 py-2 transition-all", className)} {...props}>
      {children}
    </td>
  )
})

TableCell.displayName = "TableCell"
