import React from "react";
import ReactDOM from "react-dom/client";
import { Button, ButtonProps } from "../button";
import { Dialog as DialogPrimitive, DialogProps } from "./dialog";
import { Drawer } from "./drawer";

function openDialog({ children, onClose, ...props }: DialogProps): {
	close(): void;
} {
	const container = document.createDocumentFragment();

	const root = ReactDOM.createRoot(container);

	function close() {
		root.render(
			<DialogPrimitive open={false} {...props}>
				{children}
			</DialogPrimitive>,
		);
	}

	root.render(
		<DialogPrimitive
			open={true}
			onClose={function () {
				onClose && onClose();
				close();
			}}
			{...props}
		>
			{children}
		</DialogPrimitive>,
	);

	return {
		close,
	};
}

async function openConfirm({
	question,
	confirmProps,
	cancelProps,
	...props
}: DialogProps & {
	question?: React.ReactNode;
	confirmProps?: ButtonProps;
	cancelProps?: ButtonProps;
}) {
	return new Promise(function (resolve) {
		openDialog({
			onClose() {
				resolve(false);
			},
			children: ({ close }) => (
				<div className="space-y-4">
					<div className="text-sm text-low">{question}</div>
					<div className="flex items-center justify-end gap-2">
						<Button
							onClick={function () {
								close();
								resolve(false);
							}}
							{...cancelProps}
						>
							{cancelProps?.children || "Cancel"}
						</Button>
						<Button
							onClick={function () {
								resolve(true);
								close();
							}}
							{...confirmProps}
						>
							{confirmProps?.children || "Confirm"}
						</Button>
					</div>
				</div>
			),
			...props,
		});
	});
}

interface Dialog
	extends React.ForwardRefExoticComponent<
		DialogProps & React.RefAttributes<HTMLDivElement>
	> {
	open: typeof openDialog;
	confirm: typeof openConfirm;
	Drawer: typeof Drawer;
}

const Dialog = DialogPrimitive as Dialog;

Dialog.open = openDialog;
Dialog.confirm = openConfirm;
Dialog.Drawer = Drawer;

export { Dialog };
export type { DialogProps };
