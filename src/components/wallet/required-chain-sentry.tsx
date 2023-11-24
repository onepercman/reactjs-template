import { useActive } from "@/hooks/wallet/use-active"
import { Button } from "@/libs/ui/button"
import { Dialog } from "@/libs/ui/dialog"
import { clientProxy } from "@/models/client.model"
import { toastErrors } from "@/utils/toast"
import { toast } from "react-hot-toast"
import { useSnapshot } from "valtio"
import { BaseError } from "viem"
import { useNetwork, useSwitchNetwork } from "wagmi"

export function RequiredChainSentry() {
  const client = useSnapshot(clientProxy)
  const { chain } = useNetwork()
  const { switchNetworkAsync } = useSwitchNetwork()
  const { disconnect } = useActive()

  async function setupChain() {
    try {
      if (typeof switchNetworkAsync === "function") {
        await switchNetworkAsync(client.chain.id)
      } else {
        toast.error("An error occurred while switching networks")
      }
    } catch (err) {
      toastErrors(err as BaseError, "Switch network failed")
    }
  }

  return (
    <Dialog title="Info" open={chain?.unsupported === true} closable={false} width={450}>
      <p className="text-warning mb-6">Please switch your network to continue</p>
      <div className="inline-flex w-full items-center justify-end gap-2">
        <Button variant="error" onClick={disconnect}>
          Disconnect
        </Button>
        <Button variant="primary" onClick={setupChain}>
          Switch network
        </Button>
      </div>
    </Dialog>
  )
}
