import { Button } from "mojaui"
import { useTheme } from "next-themes"
import { FC, Fragment } from "react"
import { LuMoon, LuSun } from "react-icons/lu"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Fragment>
      <Outlet />
      <Button
        size="sm"
        leftIcon={theme === "dark" ? <LuSun /> : <LuMoon />}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-6 right-6"
        shape="square"
      />
    </Fragment>
  )
}
