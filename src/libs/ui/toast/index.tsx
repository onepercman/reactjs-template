import * as Ark from "@ark-ui/react"
import { FC } from "react"
import { LuCheck, LuInfo, LuX, LuXCircle } from "react-icons/lu"
import { tv } from "tailwind-variants"
import { Button } from "../button"
import { Spinner } from "../spinner"

export const toastClass = tv({
  base: "border relative border-line bg-component p-4 rounded data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom min-w-64 shadow-lg",
  slots: {
    title: "text-sm mt-0 inline-flex items-center gap-2",
    description: "text-xs text-secondary",
    dismiss: "absolute top-2 right-2",
  },
})

export const toaster = Ark.createToaster({
  placement: "bottom-end",
})

function getIcon(type?: "success" | "error" | "loading" | "info" | any) {
  switch (type) {
    case "loading":
      return <Spinner />
    case "success":
      return <LuCheck className="text-success" />
    case "error":
      return <LuXCircle className="text-error" />
    case "info":
      return <LuInfo className="text-info" />
    default:
      return null
  }
}

export const ToasterContainer: FC = () => {
  return (
    <Ark.Toaster toaster={toaster} className="group flex gap-4">
      {({ id, title, description, type }) => {
        const classes = toastClass({})
        return (
          <Ark.Toast.Root
            key={id}
            className={classes.base()}
            style={{
              zIndex: "var(--z-index)",
              height: "var(--height)",
              opacity: "var(--opacity)",
              willChange: "translate, opacity, scale",
              transitionProperty: "translate, scale, opacity, height",
              overflowWrap: "anywhere",
              scale: "var(--scale)",
              translate: "var(--x) var(--y) 0",
              transitionDuration: "0.3s",
            }}
          >
            <Ark.Toast.Title className={classes.title()}>
              {getIcon(type)}
              {title}
            </Ark.Toast.Title>
            <Ark.Toast.Description className={classes.description()}>{description}</Ark.Toast.Description>
            <Ark.Toast.CloseTrigger asChild>
              <Button size="xs" shape="circle" className={classes.dismiss()} leftIcon={<LuX />} />
            </Ark.Toast.CloseTrigger>
          </Ark.Toast.Root>
        )
      }}
    </Ark.Toaster>
  )
}
