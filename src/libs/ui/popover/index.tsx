import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"

export interface PopoverProps {
  children?: React.ReactElement | React.ReactNode
  overlay?: React.ReactNode | ((args: { close(): void }) => React.ReactNode)
  title?: React.ReactNode
  float?: Omit<FloatProps, "children">
}

export const Popover = React.forwardRef<HTMLElement, PopoverProps>(function (
  { children, float, overlay, title, ...props },
  ref,
) {
  function _renderOverlay(close: () => void) {
    if (typeof overlay === "function") {
      return overlay({
        close,
      })
    }
    return overlay
  }

  function _renderTrigger() {
    if (typeof (children as React.ReactElement).type === "string") {
      return (
        <HeadlessUI.Popover.Button
          key={(children as React.ReactElement).key}
          as={(children as React.ReactElement).type}
          {...(children as React.ReactElement).props}
        />
      )
    }
    return <HeadlessUI.Popover.Button>{children}</HeadlessUI.Popover.Button>
  }

  if (!children) return

  return (
    <HeadlessUI.Popover ref={ref} {...props}>
      {({ close }) => (
        <Float
          portal={true}
          shift={10}
          flip={10}
          placement="bottom"
          offset={8}
          enter="ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          {...float}
        >
          {_renderTrigger()}
          <HeadlessUI.Popover.Panel as="div" className="bg-component border-line rounded border p-4 shadow">
            {title && (
              <div className="border-line mb-6 inline-flex w-full items-center justify-between border-b pb-6 text-xl">
                <span>{title}</span>
                <LuX role="button" onClick={() => close()} />
              </div>
            )}
            {_renderOverlay(close)}
          </HeadlessUI.Popover.Panel>
        </Float>
      )}
    </HeadlessUI.Popover>
  )
})

Popover.displayName = "Popover"
