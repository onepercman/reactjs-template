import {
  createContext,
  forwardRef,
  useContext,
  type ComponentProps,
  type ElementType,
  type ExoticComponent,
} from "react"
import { ComposedTVProps, Recipe } from "../types"
import { cn } from "./cn"

type ProviderComponentProps<ComponentProps extends object> =
  | ExoticComponent<ComponentProps>
  | ((prop: ComponentProps) => JSX.Element)

type ClassNamesProps<T extends Recipe> = {
  classNames?: keyof ReturnType<T>
}

export function createClassContext<
  TVFN extends Recipe,
  Slot extends keyof ReturnType<TVFN>,
>(tvFn: TVFN) {
  const StyleContext = createContext<{
    variants: ReturnType<TVFN>
    classes: ClassNamesProps<TVFN>
  }>({
    variants: {} as ReturnType<TVFN>,
    classes: {},
  })

  function withClassProvider<C extends ElementType>(Component: C, slot?: Slot) {
    const Comp = forwardRef(function (
      props: ComponentProps<C> & ComposedTVProps<TVFN>,
      ref,
    ) {
      const className = tvFn(props) as any
      const variantClassNames = className[slot ?? ""]?.()
      return (
        <StyleContext.Provider
          value={{ variants: className, classes: props.classNames }}
        >
          <Component
            ref={ref}
            className={cn(variantClassNames, props.className)}
            {...(props as any)}
          />
        </StyleContext.Provider>
      )
    })
    Comp.displayName =
      (Component as any).displayName || (Component as any).name || "Component"
    return Comp
  }

  function withClassContext<C extends ElementType>(Component: C, slot?: Slot) {
    const Comp = forwardRef(function (props: ComponentProps<C>, ref) {
      const ctx = useContext(StyleContext) as any
      const variantClassNames = ctx.variants?.[slot ?? ""]?.(
        slot && ctx.classes ? { class: ctx.classes[slot] } : undefined,
      )

      return (
        <Component
          ref={ref}
          className={cn(variantClassNames, props.className)}
          {...(props as any)}
        />
      )
    })

    Comp.displayName =
      (Component as any).displayName || (Component as any).name || "Component"
    return Comp
  }

  return {
    withClassProvider,
    withClassContext,
  }
}

export function mergeProps<T extends Record<string, any>>(
  baseProps: T,
  propsToMerge: Partial<T>,
): T {
  return {
    ...baseProps,
    ...propsToMerge,
  }
}

export function styled<ComponentProps extends object>(
  Component: ProviderComponentProps<ComponentProps>,
  tvFn: (...args: any) => any,
) {
  const Comp = forwardRef<typeof Component, ComponentProps>((props, ref) => {
    const classNames = tvFn(props)

    const componentProps = mergeProps(props, {
      className: classNames,
    } as any)

    return <Component {...componentProps} ref={ref} />
  })
  Comp.displayName = (Component as any).displayName || Component.name
  return Comp
}
