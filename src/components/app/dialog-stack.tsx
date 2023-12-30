import { Dialog } from "@/libs/ui/dialog"
import { useDialogStore } from "@/stores/dialog.store"
import { FC, Fragment } from "react"

export const DialogStack: FC = () => {
  const { dialogs } = useDialogStore()

  return (
    <Fragment>
      {dialogs.map(function ({ id, children, ...props }) {
        return (
          <Dialog key={id} {...props}>
            {children as any}
          </Dialog>
        )
      })}
    </Fragment>
  )
}
