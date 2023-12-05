import React from "react"

type PossibleRef<T> = React.Ref<T> | undefined

export type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value)
  } else if (ref !== null && ref !== undefined) {
    Object.assign(ref as React.MutableRefObject<T>, { ...ref, current: value })
  }
}

/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
export function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node))
}

/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
export function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(composeRefs(...refs), refs)
}

export type PropsWithAsAttributes<Props, As extends ReactTag> = Props & {
  as?: As
} & Omit<React.HTMLAttributes<As>, keyof Props>

export type ComponentWithAs<Props, DefaultTag extends ReactTag = "div"> = <As extends ReactTag = DefaultTag>(
  props: React.ComponentPropsWithoutRef<As> & PropsWithAsAttributes<Props, As> & React.RefAttributes<Element>,
) => React.ReactElement | null

type ForwardRefWithAs<Props> = <As extends ReactTag>(
  props: PropsWithAsAttributes<Props, As>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null

export function forwardRefWithAs<Props, As extends ReactTag = "div">(render: ForwardRefWithAs<Props>) {
  return React.forwardRef<HTMLElement, PropsWithAsAttributes<Props, As>>(render) as unknown as ComponentWithAs<
    Props,
    As
  >
}
