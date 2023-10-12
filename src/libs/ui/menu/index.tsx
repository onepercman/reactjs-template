"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiChevronRight } from "react-icons/hi"

export interface MenuItem {
  label: React.ReactNode
  icon?: React.ReactNode
  children?: Array<MenuItem>
  key?: any
}

export interface MenuProps {
  menu?: Array<MenuItem>
  children?: React.ReactElement
  onSelect?(value?: any): void
  float?: Omit<FloatProps, "children">
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(function (
  { menu, children, onSelect, float, ...props },
  ref,
) {
  const id = React.useId()

  return (
    <HeadlessUI.Menu ref={ref} {...props}>
      <Float
        portal={true}
        shift={10}
        flip={10}
        placement="bottom"
        offset={0}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        {...float}
      >
        <HeadlessUI.Menu.Button as="div" role="button">
          {children}
        </HeadlessUI.Menu.Button>
        <HeadlessUI.Menu.Items className="bg-component border-line flex flex-col rounded border p-1 shadow">
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
                <span className="hover:bg-muted relative inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2">
                  <span className="inline-flex items-center gap-2">
                    {item.icon} {item.label}
                  </span>
                  <HiChevronRight />
                </span>
              </Menu>
            ) : (
              <HeadlessUI.Menu.Item key={index + id}>
                <span
                  className={
                    "hover:bg-muted relative inline-flex cursor-pointer items-center gap-2 rounded p-2 transition-colors"
                  }
                  onClick={() => onSelect && onSelect(item.key)}
                >
                  {item.icon} {item.label}
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
