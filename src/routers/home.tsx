import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { useTheme } from "next-themes"
import { HiMoon, HiSun } from "react-icons/hi2"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <Container>
      <Button
        variant="shadow"
        color={theme === "dark" ? "secondary" : "default"}
        onClick={function () {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
        startContent={theme === "dark" ? <HiMoon /> : <HiSun />}
      >
        Button
      </Button>

      <div className="text-muted">Text</div>
    </Container>
  )
}
