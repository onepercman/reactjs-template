import React, { useMemo } from "react"
import { VariantProps } from "tailwind-variants"
import { ComposedTVProps, CtxClassNames, Recipe } from "../types"
import { cn } from "./cn"

export function createCtx<
  TVFN extends Recipe,
  Slot extends keyof ReturnType<TVFN>,
>(tvFn: TVFN) {
  const Ctx = React.createContext<{
    variants?: ReturnType<TVFN>
    classNames?: CtxClassNames<TVFN>
  }>({})

  const useCtx = () => React.useContext(Ctx)

  function withRoot<C extends React.ElementType>(Component: C, slot?: Slot) {
    const Comp = React.forwardRef<
      React.ElementRef<C>,
      React.ComponentProps<C> & ComposedTVProps<TVFN>
    >(function ({ className, classNames, ...props }, ref) {
      const variants = tvFn(props) as any

      const _className = useMemo(
        function () {
          return cn(variants?.[slot ?? ""]?.(), classNames?.[slot], className)
        },
        [variants, classNames, className, slot],
      )

      return (
        <Ctx.Provider value={{ variants, classNames: classNames }}>
          <Component ref={ref} className={_className} {...(props as any)} />
        </Ctx.Provider>
      )
    })
    Comp.displayName = (Component as any).displayName || (Component as any).name
    return Comp
  }

  function withSlot<C extends React.ElementType>(Component: C, slot?: Slot) {
    const Comp = React.forwardRef<
      React.ElementRef<C>,
      React.ComponentProps<C> & VariantProps<TVFN>
    >(function ({ className, ...props }, ref) {
      const { variants, classNames } = useCtx()

      const _className = useMemo(
        function () {
          return cn(
            slot ? variants?.[slot]?.() : undefined,
            slot ? (classNames as any)?.[slot] : undefined,
            className,
          )
        },
        [variants, classNames, className, slot],
      )

      return <Component ref={ref} className={_className} {...(props as any)} />
    })

    Comp.displayName =
      (Component as any).displayName || (Component as any).name || "Component"
    return Comp
  }

  return {
    withRoot,
    withSlot,
  }
}

export function createComponentTree<
  F extends React.ElementType,
  N extends Readonly<
    Record<string, React.ElementType | ((...args: any) => any)>
  >,
>(Factory: F, nestedChildren: Readonly<N>) {
  const c = Factory as F & N
  return Object.assign(c, nestedChildren)
}
