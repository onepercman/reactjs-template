import { FC } from "react"
import { Toaster } from "react-hot-toast"

export const ToasterContainer: FC = () => {
  return (
    <Toaster
      containerClassName="!top-20"
      toastOptions={{
        position: "bottom-left",
        className: "!bg-component !text-content !rounded",
      }}
    />
  )
}
