import { Button } from "@/shared/components"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"

export default function Home() {
  const { open } = useAppKit()

  const { address, status } = useAppKitAccount()

  return (
    <div className="p-4">
      <Button onClick={() => open()} loading={status === "connecting"}>
        Connect Wallet {address}
      </Button>
    </div>
  )
}
