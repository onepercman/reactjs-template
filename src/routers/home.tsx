import { Container } from "@/libs/ui/container"
import { Table } from "@/libs/ui/table"
import { useState } from "react"

export default function Home() {
  const [selected, setSelected] = useState<any>()

  return (
    <Container>
      <Table
        selectedKeys={selected}
        onSelectRow={setSelected}
        selectionMode="single"
        extractKey={(r) => r.id}
        data={[
          {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            username: "jdoe",
          },
          {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            username: "jsmith",
          },
          {
            id: 3,
            firstName: "Olivia",
            lastName: "Jones",
            email: "olivia.jones@example.com",
            username: "ojones",
          },
          {
            id: 4,
            firstName: "William",
            lastName: "Miller",
            email: "william.miller@example.com",
            username: "wmiller",
          },
          {
            id: 5,
            firstName: "Sophia",
            lastName: "Garcia",
            email: "sophia.garcia@example.com",
            username: "sgareia",
          },
          {
            id: 6,
            firstName: "Ava",
            lastName: "Brown",
            email: "ava.brown@example.com",
            username: "abrown",
          },
          {
            id: 7,
            firstName: "Noah",
            lastName: "Wilson",
            email: "noah.wilson@example.com",
            username: "nwilson",
          },
          {
            id: 8,
            firstName: "Mia",
            lastName: "Johnson",
            email: "mia.johnson@example.com",
            username: "mjohnson",
          },
          {
            id: 9,
            firstName: "Elijah",
            lastName: "Williams",
            email: "elijah.williams@example.com",
            username: "ewilliams",
          },
          {
            id: 10,
            firstName: "Charlotte",
            lastName: "Davis",
            email: "charlotte.davis@example.com",
            username: "cdavis",
          },
          {
            id: 11,
            firstName: "Lucas",
            lastName: "Rodriguez",
            email: "lucas.rodriguez@example.com",
            username: "lrodriguez",
          },
          {
            id: 12,
            firstName: "Evelyn",
            lastName: "Lopez",
            email: "evelyn.lopez@example.com",
            username: "elopez",
          },
          {
            id: 13,
            firstName: "Aiden",
            lastName: "Lee",
            email: "aiden.lee@example.com",
            username: "alee",
          },
          {
            id: 14,
            firstName: "Amelia",
            lastName: "Gonzalez",
            email: "amelia.gonzalez@example.com",
            username: "agonzalez",
          },
          {
            id: 15,
            firstName: "James",
            lastName: "Harris",
            email: "james.harris@example.com",
            username: "jharris",
          },
          {
            id: 16,
            firstName: "Isabella",
            lastName: "Clark",
            email: "isabella.clark@example.com",
            username: "iclark",
          },
          {
            id: 17,
            firstName: "Benjamin",
            lastName: "Lewis",
            email: "benjamin.lewis@example.com",
            username: "benjamin",
          },
        ]}
        columns={[
          {
            dataIndex: "id",
            // label: "ID",
          },
          {
            dataIndex: "firstName",
            // label: "First Name",
          },
          {
            dataIndex: "lastName",
            // label: "Last Name",
          },
          {
            dataIndex: "email",
            // label: "Email",
          },
          {
            dataIndex: "username",
            // label: "Username",
          },
        ]}
      />
    </Container>
  )
}
