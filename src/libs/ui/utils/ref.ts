import React from "react"

type PossibleRef<T> = React.Ref<T> | undefined

type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>

type PropsWithAsAttributes<Props, As extends ReactTag> = Props & {
  as?: As
} & Omit<React.HTMLAttributes<As>, keyof Props>

type ComponentWithAs<Props, DefaultTag extends ReactTag = "div"> = {
  <As extends ReactTag = DefaultTag>(
    props: React.ComponentPropsWithoutRef<As> & PropsWithAsAttributes<Props, As> & React.RefAttributes<Element>,
  ): React.ReactElement | null
  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

type ForwardRefWithGenericRenderFunction<Props> = <As extends ReactTag>(
  props: PropsWithAsAttributes<Props, As>,
  ref: React.Ref<As>,
) => React.ReactElement | null

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

function forwardRefWithGeneric<As extends ReactTag = "div", Props extends object = object>(
  render: ForwardRefWithGenericRenderFunction<Props>,
) {
  return React.forwardRef<As, PropsWithAsAttributes<Props, As>>(render) as unknown as ComponentWithAs<Props, As>
}

export type { ComponentWithAs, ForwardRefWithGenericRenderFunction, PossibleRef, PropsWithAsAttributes, ReactTag }

export { forwardRefWithGeneric, useComposedRefs }
