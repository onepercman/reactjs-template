import React from "react"
import { VariantProps } from "tailwind-variants"
import { ComposedTVProps, Recipe } from "../types"
import { cn } from "./cn"

export function createCtx<TVFN extends Recipe, Slot extends keyof ReturnType<TVFN>>(tvFn: TVFN) {
  const Ctx = React.createContext<{
    variants?: ReturnType<TVFN>
    classNames?: ComposedTVProps<TVFN> extends { classNames: any } ? ComposedTVProps<TVFN>["classNames"] : unknown
  }>({})

  const useCtx = () => React.useContext(Ctx)

  function withRoot<C extends React.ElementType>(Component: C, slot?: Slot) {
    const Comp = React.forwardRef(function (
      { className, classNames, ...props }: React.ComponentProps<C> & ComposedTVProps<TVFN>,
      ref,
    ) {
      const variants = tvFn(props) as any

      const slotClassName = variants[slot ?? ""]?.()

      const externalClassName = classNames ? classNames[slot] : undefined

      return (
        <Ctx.Provider value={{ variants, classNames: classNames }}>
          <Component ref={ref} className={cn(slotClassName, externalClassName, className)} {...(props as any)} />
        </Ctx.Provider>
      )
    })
    Comp.displayName = (Component as any).displayName || (Component as any).name
    return Comp
  }

  function withSlot<C extends React.ElementType>(Component: C, slot?: Slot) {
    const Comp = React.forwardRef(function (
      { className, ...props }: React.ComponentProps<C> & VariantProps<TVFN>,
      ref,
    ) {
      const ctx = useCtx()

      function _classNames() {
        if (!slot) return className
        let slotClassName: string = ""
        let externalSlotClassName: string = ""
        if (ctx.variants) {
          slotClassName = ctx.variants[slot]()
        }
        if (ctx.classNames) {
          externalSlotClassName = (ctx.classNames as any)[slot]
        }

        return cn(slotClassName, externalSlotClassName, className)
      }

      return <Component ref={ref} className={_classNames()} {...(props as any)} />
    })

    Comp.displayName = (Component as any).displayName || (Component as any).name || "Component"
    return Comp
  }

  return {
    withRoot,
    withSlot,
  }
}

export function createFactory<
  C extends React.ElementType,
  K extends Record<string, React.ElementType | ((...args: any) => any)>,
>(Component: C, children: Readonly<K>) {
  const c = Component as any
  Object.keys(children).forEach(function (key) {
    c[key] = children[key]
  })
  return c as C & K
}
