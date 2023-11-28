import { supportedChains } from "@/libs/wagmi"
import { clientProxy, useClientProxy } from "@/models/client.model"
import { useState } from "react"
import toast from "react-hot-toast"
import { Chain, useSwitchNetwork } from "wagmi"

export function useChainSetup() {
  const { walletClient, chain } = useClientProxy()
  const { switchNetworkAsync } = useSwitchNetwork()
  const [isSwitchingChain, setIsSwitchingChain] = useState(false)

  async function selectChain(chain: Chain) {
    try {
      setIsSwitchingChain(true)
      if (walletClient?.account) {
        if (typeof switchNetworkAsync === "function") {
          const setup = await switchNetworkAsync(chain.id)
          clientProxy.setChain(setup)
        } else {
          toast.error("An error occurred while switching networks")
        }
      } else {
        clientProxy.setChain(chain)
      }
    } catch (err) {
      toast.error("Switch network failed")
    } finally {
      setIsSwitchingChain(false)
    }
  }

  return {
    currentChain: chain,
    chains: supportedChains,
    selectChain,
    isSwitchingChain,
  }
}
