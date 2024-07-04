import * as Ark from "@ark-ui/react"
import { FC } from "react"
import { LuCheck, LuInfo, LuX, LuXCircle } from "react-icons/lu"
import { Button } from "../button"
import { Spinner } from "../spinner"
import { toast } from "../variants"

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

export const ToasterContainer: FC<{
  toaster: ReturnType<typeof Ark.createToaster>
}> = ({ toaster }) => {
  const classes = toast()

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
            <Ark.Toast.Description className={classes.description()}>
              {description}
            </Ark.Toast.Description>
            <Ark.Toast.CloseTrigger asChild>
              <Button
                size="xs"
                shape="circle"
                className={classes.dismiss()}
                leftIcon={<LuX />}
              />
            </Ark.Toast.CloseTrigger>
          </Ark.Toast.Root>
        )
      }}
    </Ark.Toaster>
  )
}

export { createToaster } from "@ark-ui/react"
