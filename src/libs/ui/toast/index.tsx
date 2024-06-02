import * as Ark from "@ark-ui/react"
import { FC } from "react"
import { LuCheck, LuInfo, LuX, LuXCircle } from "react-icons/lu"
import { tv } from "tailwind-variants"
import { Button } from "../button"
import { Spinner } from "../spinner"

export const toastClass = tv({
  base: "border relative border-line bg-component p-4 rounded min-w-64 shadow-lg transition-all translate-x-[var(--x)] -translate-y-[var(--delta)] data-[paused]:translate-y-[var(--y)] scale-[var(--scale)] data-[paused]:scale-100 opacity-[var(--opacity)] data-[paused]:opacity-100",
  slots: {
    container: "gap-8",
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
  const classes = toastClass()

  return (
    <Ark.Toaster toaster={toaster} className={classes.container()}>
      {({ id, title, description, type }) => {
        return (
          <Ark.Toast.Root
            key={id}
            className={classes.base()}
            style={
              {
                "--scale": "calc(1 - var(--index) * 0.1)",
                "--delta": "var(--index) * var(--gap)",
                "--opacity": "calc(1 - var(--index) * 0.15)",
                zIndex: "var(--z-index)",
              } as React.CSSProperties
            }
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
