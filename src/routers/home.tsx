import { Container, SegmentGroup } from "@/libs/one-ui/components"

export default function Home() {
  return (
    <Container>
      <SegmentGroup
        defaultValue="1"
        items={[
          {
            children: "Item 1",
            value: "1",
          },
          {
            children: "Item 2",
            value: "2",
          },
          {
            children: "Item 3",
            value: "3",
          },
        ]}
      />
    </Container>
  )
}
