type PossibleRef<T> = React.Ref<T> | undefined;

type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

type PropsWithAsAttributes<Props, As extends ReactTag> = Props & {
	as?: As;
} & Omit<React.HTMLAttributes<As>, keyof Props>;

interface ForwardedRefComponent {
	displayName?: string;
	propTypes?: React.WeakValidationMap<any>;
	contextTypes?: React.ValidationMap<any>;
	defaultProps?: Partial<any>;
	id?: string;
}

type ForwardRefWithAsProps<
	As extends ReactTag,
	Props,
> = React.ComponentPropsWithoutRef<As> &
	PropsWithAsAttributes<Props, As> &
	React.RefAttributes<Element>;
