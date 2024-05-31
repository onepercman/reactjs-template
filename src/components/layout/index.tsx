import { Button } from "@/libs/ui/button"
import { useTheme } from "next-themes"
import { FC, Fragment } from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Fragment>
      <Outlet />
      <Button
        leftIcon={theme === "dark" ? <HiMoon /> : <HiSun />}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-6 right-6"
        shape="square"
      />
    </Fragment>
  )
}
