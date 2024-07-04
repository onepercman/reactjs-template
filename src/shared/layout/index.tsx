import { FC, Fragment } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
