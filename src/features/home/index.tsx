import { Button, Table } from "@/libs/atoms"

export default function () {
  return (
    <div className="p-4">
      <Table
        selectionMode="single"
        extractKey={(d) => d.id}
        data={dummy}
        columns={[
          {
            label: "Id",
            dataIndex: "id",
          },
          {
            label: "Name",
            dataIndex: "name",
          },
        ]}
      />
      <Button color="primary">Button</Button>
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
