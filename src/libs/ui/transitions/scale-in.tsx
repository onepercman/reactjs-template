import { Transition } from "@headlessui/react"
import { FC, ReactNode } from "react"

interface ScaleInProps {
  show?: boolean
  children?: ReactNode
}

export const ScaleIn: FC<ScaleInProps> = ({ show, children }) => {
  return (
    <Transition appear show={show}>
      <Transition.Child
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {children}
      </Transition.Child>
    </Transition>
  )
}
