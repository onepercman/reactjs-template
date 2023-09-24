import { Transition } from "@headlessui/react"
import React from "react"

interface FadeUpInProps {
  show?: boolean
  children?: React.ReactNode
}

export const FadeUpIn: React.FC<FadeUpInProps> = ({ show, children }) => {
  return (
    <Transition as={React.Fragment} appear show={show}>
      <Transition.Child
        enter="ease-out duration-100"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 translate-y-full"
      >
        {children}
      </Transition.Child>
    </Transition>
  )
}
