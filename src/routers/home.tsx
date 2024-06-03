import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { Tooltip } from "@/libs/ui/tooltip"

export default function Home() {
  return (
    <Container>
      <Tooltip content="This is a tooltip">
        <Button>Tooltip</Button>
      </Tooltip>
    </Container>
  )
}
