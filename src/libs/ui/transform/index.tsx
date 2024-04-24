import { Transition, TransitionClasses } from "@headlessui/react";
import React from "react";

interface TransformProps {
	variant?: TransitionClasses;
	show?: boolean;
	appear?: boolean;
}

interface Transform extends ForwardedRefComponent {
	<Tag extends ReactTag>(
		props: ForwardRefWithAsProps<Tag, TransformProps>,
	): React.ReactElement | null;
}

function _generate<Tag extends ReactTag>(
	render: <Tag extends ReactTag>(
		props: ForwardRefWithAsProps<Tag, TransformProps>,
		ref: React.ForwardedRef<Tag>,
	) => React.ReactElement | null,
) {
	return React.forwardRef<Tag, ForwardRefWithAsProps<Tag, object>>(
		render,
	) as unknown as Transform;
}

export const Transform = _generate(function (
	{ as = "div", variant, children, ...props },
	ref,
) {
	return (
		<Transition as={React.Fragment} unmount appear {...props}>
			<Transition.Child
				ref={ref as React.ForwardedRef<HTMLElement>}
				as={as as React.ElementType}
				{...variant}
			>
				{children}
			</Transition.Child>
		</Transition>
	);
});
