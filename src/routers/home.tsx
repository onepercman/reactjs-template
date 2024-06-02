import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { toaster } from "@/libs/ui/toast"

export default function Home() {
  return (
    <Container>
      <Button
        onClick={function () {
          toaster.create({
            title: "Hello " + new Date().getSeconds(),
            description: "How are yout today",
            duration: 60000,
          })
        }}
      >
        Button
      </Button>
    </Container>
  )
}
