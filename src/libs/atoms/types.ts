import { VariantProps } from "tailwind-variants"

export type ReactTag =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>

export type PropsWithAsAttributes<Props, As extends ReactTag> = Props & {
  as?: As
} & Omit<React.HTMLAttributes<As>, keyof Props>

export interface ForwardedRefComponent {
  displayName?: string
  defaultProps?: Partial<any>
  id?: string
}

export type ForwardRefWithAsProps<
  As extends ReactTag,
  Props,
> = React.ComponentPropsWithoutRef<As> &
  PropsWithAsAttributes<Props, As> &
  React.RefAttributes<Element>

export type Recipe = (...args: any) => any
export type TVReturn<TVFN extends Recipe> = ReturnType<TVFN>
export type TVSlots<TVFN extends Recipe> = keyof TVReturn<TVFN>
export type TVSlot2ClassNames<Slots extends string> = Partial<
  Record<Slots, any>
>
export type TVSlotClassNamesProps<TVFN extends Recipe> =
  TVSlots<TVFN> extends string
    ? { classNames?: TVSlot2ClassNames<TVSlots<TVFN>> }
    : object
export type ComposedTVProps<TVFN extends Recipe> = VariantProps<TVFN> &
  TVSlotClassNamesProps<TVFN>
