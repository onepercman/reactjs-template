import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"
import { FC } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Layout: FC = () => {
  const navigate = useNavigate()

  return (
    <ThemeProvider>
      <NextUIProvider navigate={navigate}>
        <Outlet />
      </NextUIProvider>
    </ThemeProvider>
  )
}
