import * as Ark from "@ark-ui/react"
import { FC } from "react"
import { LuCheck, LuInfo, LuX, LuXCircle } from "react-icons/lu"
import { Button } from "../button"
import { Spinner } from "../spinner"
import { toast } from "./variants"

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
  const styles = toast()

  return (
    <Ark.Toaster toaster={toaster} className={styles.container()}>
      {({ id, title, description, type }) => {
        return (
          <Ark.Toast.Root key={id} className={styles.base()}>
            <Ark.Toast.Title className={styles.title()}>
              {getIcon(type)}
              {title}
            </Ark.Toast.Title>
            <Ark.Toast.Description className={styles.description()}>
              {description}
            </Ark.Toast.Description>
            <Ark.Toast.CloseTrigger asChild>
              <Button
                size="xs"
                shape="circle"
                className={styles.dismiss()}
                leftIcon={<LuX />}
              />
            </Ark.Toast.CloseTrigger>
          </Ark.Toast.Root>
        )
      }}
    </Ark.Toaster>
  )
}
