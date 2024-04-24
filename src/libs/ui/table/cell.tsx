import React from "react";
import { cn } from "../utils/className";

export const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(function ({ children, className, ...props }, ref) {
	return (
		<td
			ref={ref}
			className={cn("px-base py-small transition-all", className)}
			{...props}
		>
			{children}
		</td>
	);
});

TableCell.displayName = "TableCell";
