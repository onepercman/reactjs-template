import { useActive } from "@/hooks/wallet/use-active"
import { Button } from "@/libs/ui/button"
import { Dialog } from "@/libs/ui/dialog"
import { useStore } from "@/libs/valtio"
import { chains } from "@/libs/wagmi"
import { clientStore } from "@/stores/client.store"
import { toastErrors } from "@/utils/toast"
import { toast } from "react-hot-toast"
import { BaseError } from "viem"
import { useChainId, useSwitchChain } from "wagmi"

export function RequiredChainSentry() {
  const client = useStore(clientStore)
  const chainId = useChainId()
  const { switchChainAsync } = useSwitchChain()
  const { disconnect } = useActive()

  async function setupChain() {
    try {
      if (typeof switchChainAsync === "function") {
        await switchChainAsync({
          chainId: client.chain.id,
        })
      } else {
        toast.error("An error occurred while switching networks")
      }
    } catch (err) {
      toastErrors(err as BaseError, "Switch network failed")
    }
  }

  return (
    <Dialog title="Info" open={!chains.map((el) => el.id).includes(chainId as any)} closable={false} width={450}>
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
