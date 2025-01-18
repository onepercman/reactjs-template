import { Button } from "@/shared/components"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { LuWallet } from "react-icons/lu"

export default function Home() {
  const { open } = useAppKit()

  const { address, status } = useAppKitAccount()

  return (
    <div className="p-4">
      <Button
        color="primary"
        onClick={() => open()}
        loading={status === "connecting"}
        leftIcon={<LuWallet />}
      >
        {address ?? "Connect Wallet"}
      </Button>
    </div>
  )
}
