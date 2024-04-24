import React from "react";
import { Empty } from "../empty";
import { Loader } from "../loader";
import { Pagination, PaginationProps } from "../pagination";
import { cn } from "../utils/className";
import { TableCell } from "./cell";
import { TableCellHead } from "./cell-head";

interface TableRow extends Readonly<Record<string, unknown>> {
	key?: string;
}

interface TableColumnProps<Row extends TableRow>
	extends React.ThHTMLAttributes<HTMLTableCellElement> {
	label: React.ReactNode;
	key: string;
	dataIndex: keyof Row;
	sort: boolean;
	render(value: any, row: Row, index: number): React.ReactNode;
}

interface TableProps<Row extends TableRow>
	extends React.HTMLAttributes<HTMLTableElement> {
	columns?: readonly Partial<TableColumnProps<Row>>[];
	data?: readonly Row[];
	className?: string;
	onSelectRow?(row?: Row): void;
	loading?: boolean;
	tableClassName?: string;
	pagination?: PaginationProps;
}
interface Table extends ForwardedRefComponent {
	<Row extends TableRow>(
		props: ForwardRefWithAsProps<"div", TableProps<Row>>,
	): React.ReactElement | null;
	Cell: typeof TableCell;
	CellHead: typeof TableCellHead;
}

function _generate<Row extends TableRow>(
	render: <Row extends TableRow>(
		props: TableProps<Row> & React.HTMLAttributes<HTMLTableElement>,
		ref: React.ForwardedRef<HTMLTableElement>,
	) => React.ReactElement | null,
) {
	return React.forwardRef<HTMLTableElement, TableProps<Row>>(
		render,
	) as unknown as Table;
}

const Table = _generate(function (
	{
		children,
		columns,
		data,
		onSelectRow,
		className,
		loading,
		tableClassName,
		pagination,
		...props
	},
	ref,
) {
	function _renderContainer() {
		if (loading) {
			return (
				<tr>
					<TableCell colSpan={columns?.length || 1}>
						<Loader />
					</TableCell>
				</tr>
			);
		}
		if (!data?.length) {
			return (
				<tr>
					<TableCell colSpan={columns?.length || 1}>
						<Empty />
					</TableCell>
				</tr>
			);
		}

		return data.map((row, index) => (
			<tr
				key={row.key || index}
				className="animate-push ease-expo divide-line group divide-x opacity-0 transition-colors"
				style={{
					animationDelay: index / 20 + "s",
				}}
				onClick={() => onSelectRow && onSelectRow(row)}
			>
				{columns?.map(
					({ key, className, dataIndex, render, ...column }, columnIndex) => (
						<TableCell
							key={key || columnIndex}
							className={cn(
								"px-base py-small transition-all",
								onSelectRow && "group-hover:bg-primary/30 cursor-pointer",
								className,
							)}
							{...column}
						>
							{render
								? render(row[dataIndex!], row, index)
								: (row[dataIndex || ""] as React.ReactNode)}
						</TableCell>
					),
				)}
			</tr>
		));
	}

	return (
		<div
			className={cn(
				className,
				"scrollbar scrollbar-track-inherit scrollbar-thumb-inherit border-line w-full overflow-auto rounded border",
			)}
		>
			<table
				ref={ref}
				className={cn("w-full border-collapse", tableClassName)}
				{...props}
			>
				{columns?.filter((c) => !!c.label).length ? (
					<thead className="text-left">
						<tr className="divide-line divide-x">
							{columns.map(
								(
									{ key, label, className, dataIndex, render: _, ...column },
									index,
								) => (
									<TableCellHead
										key={key || (dataIndex as string) || index}
										className={cn(
											"text-muted px-base py-small border-line border-b !text-sm",
											className,
										)}
										{...column}
									>
										{label}{" "}
									</TableCellHead>
								),
							)}
						</tr>
					</thead>
				) : null}

				<tbody className="divide-line relative divide-y text-left">
					{_renderContainer()}
					{pagination && (
						<tr>
							<TableCell colSpan={columns?.length || 1}>
								<div className="flex w-full justify-end">
									<div className="px-base py-small sticky left-0 right-0 w-fit">
										<Pagination {...pagination} />
									</div>
								</div>
							</TableCell>
						</tr>
					)}
				</tbody>
				{children}
			</table>
		</div>
	);
});

Table.displayName = "Table";
Table.Cell = TableCell;
Table.CellHead = TableCellHead;

export { Table };
export type { TableColumnProps, TableProps };
