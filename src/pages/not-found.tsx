import { Container } from "@/libs/ui/container"
import { Typography } from "@/libs/ui/typography"

export default function () {
  return (
    <Container className="gap-base flex flex-col items-center p-24">
      <Typography.H1 className="text-primary text-7xl">404</Typography.H1>
      <Typography.H2>Not Found</Typography.H2>
    </Container>
  )
}
