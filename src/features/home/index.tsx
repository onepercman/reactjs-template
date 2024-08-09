import { Select } from "@/libs/atoms"

export default function () {
  return (
    <div className="p-4">
      <Select items={dummy} itemToString={(i) => i.name} itemToValue={(i) => i.id}>
        {dummy.map((item) => (
          <Select.Item key={item.id} item={item}>
            {item.name}
          </Select.Item>
        ))}
      </Select>
    </div>
  )
}

const dummy = [
  { id: "101", name: "Alex Johnson" },
  { id: "102", name: "Sarah Thompson" },
  { id: "103", name: "Michael Brown" },
  { id: "104", name: "Emily Davis" },
  { id: "105", name: "Daniel Garcia" },
  { id: "106", name: "Jessica Martinez" },
  { id: "107", name: "Matthew Wilson" },
  { id: "108", name: "Olivia Anderson" },
  { id: "109", name: "David White" },
  { id: "110", name: "Sophia Harris" },
]
