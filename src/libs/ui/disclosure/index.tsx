import { cn } from "@/libs/className"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiChevronDown } from "react-icons/hi"

interface DisclosureItem {
  label: React.ReactNode
  content?: React.ReactNode
  defaultOpen?: boolean
}

export interface DisclosureProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<DisclosureItem>
}

export const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(function (
  { items, className, ...props },
  ref,
) {
  const _className = cn("bg-component flex flex-col gap-1 rounded p-1", className)

  return (
    <div ref={ref} className={_className}>
      {items?.map((item, index) => (
        <HeadlessUI.Disclosure as={React.Fragment} {...props} key={index}>
          {({ open }) => (
            <React.Fragment>
              <HeadlessUI.Disclosure.Button className={cn("bg-component relative z-10 rounded p-2 pr-8 text-left")}>
                {item.label}
                <HiChevronDown className={cn("absolute right-2 top-3 transition-all", open && "rotate-180")} />
              </HeadlessUI.Disclosure.Button>
              <HeadlessUI.Transition appear show={open}>
                <HeadlessUI.Transition.Child
                  as={React.Fragment}
                  enter="ease-in duration-100"
                  enterFrom="-translate-y-full opacity-0"
                  enterTo="opacity-100 translate-y-0"
                  leave="ease-out duration-100"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="-translate-y-full opacity-0"
                >
                  <HeadlessUI.Disclosure.Panel className="p-2">{item.content}</HeadlessUI.Disclosure.Panel>
                </HeadlessUI.Transition.Child>
              </HeadlessUI.Transition>
            </React.Fragment>
          )}
        </HeadlessUI.Disclosure>
      ))}
    </div>
  )
})

Disclosure.displayName = "Disclosure"
