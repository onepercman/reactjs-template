import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { dialogStore } from "@/stores/dialog.store"

export default function Home() {
  return (
    <Container>
      <Button
        onClick={function () {
          dialogStore.open({
            id: "1",
            title: "Dialog 1",
            children: <div>Content 1</div>,
          })
        }}
      >
        Open
      </Button>
    </Container>
  )
}
