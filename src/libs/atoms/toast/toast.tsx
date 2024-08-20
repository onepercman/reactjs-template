import { createToaster, Toast, Toaster } from "@ark-ui/react"
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

export const Component: FC<{
  toaster: ReturnType<typeof createToaster>
}> = ({ toaster }) => {
  const styles = toast()

  return (
    <Toaster toaster={toaster} className={styles.container()}>
      {({ id, title, description, type }) => {
        return (
          <Toast.Root key={id} className={styles.base()}>
            <Toast.Title className={styles.title()}>
              {getIcon(type)}
              {title}
            </Toast.Title>
            <Toast.Description className={styles.description()}>{description}</Toast.Description>
            <Toast.CloseTrigger asChild>
              <Button size="xs" shape="circle" className={styles.dismiss()} leftIcon={<LuX />} />
            </Toast.CloseTrigger>
          </Toast.Root>
        )
      }}
    </Toaster>
  )
}

Component.displayName = "Toaster"
