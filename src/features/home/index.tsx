import { Table } from "@/libs/atoms"
import { toaster } from "@/libs/toaster"
import { sleep } from "@/shared/utils/promise"
import { useQuery } from "@tanstack/react-query"

export default function () {
  const { data, isLoading } = useQuery({
    queryKey: ["dummy data"],
    async queryFn() {
      return sleep(1000).then(() => dummy)
    },
  })

  return (
    <div className="p-4">
      <Table highlightRow>
        <Table.Header>
          <Table.Column align="left">Id</Table.Column>
          <Table.Column align="left">Name</Table.Column>
        </Table.Header>

        <Table.Body>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <Table.Row key={index}>
                <Table.Cell colSpan={2} className="h-8 animate-pulse" />
              </Table.Row>
            ))
          ) : !data ? (
            <Table.Row></Table.Row>
          ) : (
            data.map((item) => (
              <Table.Row key={item.id} onClick={() => toaster.create({ title: item.name })}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
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
