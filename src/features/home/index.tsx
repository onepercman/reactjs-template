import { Accordion } from "mojaui"

export default function () {
  return (
    <div className="p-4">
      <Accordion
        items={[
          {
            value: "1",
            trigger: { children: "Trigger 1" },
            content: { children: "Content 1" },
          },
          {
            value: "2",
            trigger: { children: "Trigger 2" },
            content: { children: "Content 2" },
          },
        ]}
      />
    </div>
  )
}
