import React from "react"
import { LuX } from "react-icons/lu"
import { Drawer as VDrawer } from "vaul"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { drawer } from "./variants"

export type DrawerProps = React.ComponentProps<typeof VDrawer.Root> &
  ComposedTVProps<typeof drawer> & {
    trigger?: React.ReactNode
    title?: React.ReactNode
    children?: React.ReactNode
    className?: string
    closeTrigger?: boolean | React.ReactNode
    handle?: boolean
  }

export interface Drawer extends ForwardedRefComponent {
  (
    props: DrawerProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): React.ReactElement | null
}

function _constructor(
  render: (
    props: DrawerProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, DrawerProps>(
    render,
  ) as unknown as Drawer
}

export const Drawer = _constructor(function (
  {
    trigger,
    title,
    children,
    className,
    classNames,
    closeTrigger,
    handle,
    ...props
  },
  ref,
) {
  const styles = drawer({ className })

  return (
    <VDrawer.Root {...props}>
      {trigger ? <VDrawer.Trigger asChild>{trigger}</VDrawer.Trigger> : null}
      <VDrawer.Portal>
        <VDrawer.Overlay
          className={styles.overlay({ class: classNames?.overlay })}
        />
        <VDrawer.Content
          ref={ref}
          className={styles.content({ className, class: classNames?.content })}
        >
          {closeTrigger ? (
            <VDrawer.Close
              className={styles.close({ class: classNames?.close })}
            >
              <LuX />
            </VDrawer.Close>
          ) : null}
          {handle ? (
            <VDrawer.Handle
              className={styles.handle({ class: classNames?.handle })}
            />
          ) : null}
          <VDrawer.Title className={styles.title({ class: classNames?.title })}>
            {title}
          </VDrawer.Title>
          {children}
        </VDrawer.Content>
      </VDrawer.Portal>
    </VDrawer.Root>
  )
})

Drawer.displayName = "Drawer"
