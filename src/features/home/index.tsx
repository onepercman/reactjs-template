import { Select } from "@/libs/atoms"
import { createListCollection } from "@ark-ui/react"

export default function Home() {
  return (
    <div>
      <Select
        collection={createListCollection({
          items,
          itemToValue(item) {
            return item.id
          },
          itemToString(item) {
            return item.name
          },
        })}
      >
        {items.map(item => (
          <Select.Item key={item.id} item={item}>
            {item.name}
          </Select.Item>
        ))}
      </Select>
    </div>
  )
}

const items = [
  {
    id: "1",
    name: "Trung",
  },
  {
    id: "2",
    name: "Trung 2",
  },
]
