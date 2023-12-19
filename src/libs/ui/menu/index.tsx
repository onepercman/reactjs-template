import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiChevronRight } from "react-icons/hi"
import { cn } from "../utils/className"

export interface MenuItem {
  label: React.ReactNode
  icon?: React.ReactNode
  children?: Array<MenuItem>
  key?: any
  disabled?: boolean
}

export interface MenuProps {
  selected?: string
  menu?: Array<MenuItem>
  children?: React.ReactElement | React.ReactNode
  onSelect?(value?: any): void
  float?: Omit<FloatProps, "children">
  overlayClass?: string
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(function (
  { menu, children, onSelect, float, overlayClass, selected, ...props },
  ref,
) {
  const id = React.useId()

  function _renderTrigger() {
    if (typeof (children as React.ReactElement).type === "string") {
      return (
        <HeadlessUI.Menu.Button
          key={(children as React.ReactElement).key}
          as={(children as React.ReactElement).type}
          {...(children as React.ReactElement).props}
        />
      )
    }
    return <HeadlessUI.Menu.Button>{children}</HeadlessUI.Menu.Button>
  }

  if (!children) return

  return (
    <HeadlessUI.Menu ref={ref} {...props}>
      <Float
        portal={true}
        shift={10}
        flip={10}
        placement="bottom"
        offset={6}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        {...float}
      >
        {_renderTrigger()}
        <HeadlessUI.Menu.Items className={cn("bg-component flex flex-col rounded p-1 shadow", overlayClass)}>
          {menu?.map((item, index) =>
            item.children?.length ? (
              <Menu
                menu={item.children}
                float={{
                  placement: "right",
                  offset: 10,
                }}
                key={index + id}
              >
                <span className="hover:bg-muted/50 relative inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2">
                  <span className="inline-flex items-center gap-2">
                    {item.icon} {item.label}
                  </span>
                  <HiChevronRight />
                </span>
              </Menu>
            ) : (
              <HeadlessUI.Menu.Item key={index + id} disabled={item.disabled}>
                <span
                  className={cn(
                    "hover:bg-muted/50 relative inline-flex cursor-pointer items-center gap-2 rounded p-2 pr-8 transition-colors",
                    item.disabled && "opacity-50",
                  )}
                  onClick={() => onSelect && onSelect(item.key)}
                >
                  {item.icon} {item.label}{" "}
                  <span
                    className={cn(
                      "absolute right-2 top-2 transition-opacity",
                      selected && selected === item.key ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <i className="fa-solid fa-check" />
                  </span>
                </span>
              </HeadlessUI.Menu.Item>
            ),
          )}
        </HeadlessUI.Menu.Items>
      </Float>
    </HeadlessUI.Menu>
  )
})

Menu.displayName = "Menu"
