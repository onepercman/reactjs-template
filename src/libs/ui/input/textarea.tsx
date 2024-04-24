import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/className";

const textarea = cva(cn("input input-textarea"), {
	variants: {
		variant: {
			filled: "input-filled",
			outlined: "input-outlined",
		},
	},
	defaultVariants: {
		variant: "filled",
	},
});

type TextareaVariantProps = VariantProps<typeof textarea>;
export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		TextareaVariantProps {
	isError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	function ({ className, variant, isError, ...props }, ref) {
		return (
			<textarea
				ref={ref}
				className={cn(
					textarea({ variant, className }),
					isError && "state-error",
				)}
				{...props}
			/>
		);
	},
);

Textarea.displayName = "Textarea";
