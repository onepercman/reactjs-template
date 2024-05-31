import { FC } from "react"
import ReactDOM from "react-dom"
import { Toaster } from "react-hot-toast"

export const ToasterContainer: FC = () => {
  return ReactDOM.createPortal(
    <Toaster
      containerClassName="!top-20"
      toastOptions={{
        position: "bottom-left",
        className: "!bg-component !text-foreground !rounded",
      }}
    />,
    document.body,
  )
}
