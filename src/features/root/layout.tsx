import { Toaster } from "@/libs/atoms"
import { toaster } from "@/libs/toaster"
import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
  return (
    <Fragment>
      <Outlet />
      <Toaster toaster={toaster} />
    </Fragment>
  )
}
