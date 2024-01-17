import React from "react"

type PossibleRef<T> = React.Ref<T> | undefined

type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>

type PropsWithAsAttributes<Props, As extends ReactTag> = Props & {
  as?: As
} & Omit<React.HTMLAttributes<As>, keyof Props>

interface ForwardedRefComponent {
  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

type ForwardRefWithAsProps<As extends ReactTag, Props> = React.ComponentPropsWithoutRef<As> &
  PropsWithAsAttributes<Props, As> &
  React.RefAttributes<Element>

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value)
  } else if (ref !== null && ref !== undefined) {
    Object.assign(ref as React.MutableRefObject<T>, { ...ref, current: value })
  }
}

function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node))
}

function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  return React.useCallback(composeRefs(...refs), refs)
}

export type { ForwardRefWithAsProps, ForwardedRefComponent, PossibleRef, PropsWithAsAttributes, ReactTag }

export { composeRefs, setRef, useComposedRefs }
