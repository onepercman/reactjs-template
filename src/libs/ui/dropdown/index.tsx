"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import React from "react"
import { HiChevronRight } from "react-icons/hi"
import { cn } from "../utils/className"

export interface DropdownItem {
  label: React.ReactNode
  icon?: React.ReactNode
  key?: string | number
  children?: Array<DropdownItem>
  disabled?: boolean
}

export interface DropdownProps {
  menu?: Array<DropdownItem>
  children?: React.ReactElement
  onSelect?(item?: any): void
  className?: string
  float?: Omit<FloatProps, "children">
}

export const Dropdown: React.FC<DropdownProps> = function ({ menu, onSelect, children, float, className, ...props }) {
  const [show, setShow] = React.useState<boolean>(false)

  const triggerProps: React.HTMLAttributes<HTMLDivElement> = {
    onMouseEnter: () => setShow(true),
    onFocus: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onBlur: () => setShow(false),
    onClick: () => setShow((prev) => !prev),
  }

  const _trigger =
    typeof children === "string" ? (
      <span {...triggerProps}>{children}</span>
    ) : children ? (
      React.cloneElement(children, {
        ...children.props,
      })
    ) : (
      <span></span>
    )

  return (
    <div {...triggerProps} className={cn("h-fit w-fit", className)}>
      <Float
        portal={true}
        shift={10}
        arrow={0}
        flip={10}
        offset={0}
        placement="bottom"
        show={show}
        enter="ease-out duration-100"
        enterFrom="opacity-0 -translate-y-3"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-3"
        {...float}
      >
        {_trigger}
        <div className="border-line rounded border" {...props}>
          {/* <Float.Arrow className="bg-component border-line absolute h-3 w-3 rotate-45 border" /> */}
          <div className="bg-component relative flex flex-col rounded p-1 shadow">
            {menu?.map((item, index) =>
              item.children?.length ? (
                <Dropdown
                  menu={item.children}
                  float={{
                    placement: "right",
                    offset: 10,
                  }}
                  key={item.label!.toString() + index}
                >
                  <span className="hover:bg-muted relative inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2">
                    <span className="inline-flex items-center gap-2">
                      {item.icon} {item.label}
                    </span>
                    <HiChevronRight />
                  </span>
                </Dropdown>
              ) : (
                <div key={item.label!.toString() + item.key + index}>
                  <span
                    className={cn(
                      "hover:bg-muted relative inline-flex w-full cursor-pointer items-center gap-2 rounded p-2 transition-colors",
                      item.disabled && "pointer-events-none",
                    )}
                    onClick={() => onSelect && onSelect(item.key)}
                  >
                    {item.icon} {item.label}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </Float>
    </div>
  )
}

Dropdown.displayName = "Dropdown"
