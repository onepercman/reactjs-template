import { supportedChains } from "@/libs/wagmi"
import { useClient } from "@/models/root"
import { useState } from "react"
import toast from "react-hot-toast"
import { Chain, useSwitchNetwork } from "wagmi"

export function useChainSetup() {
  const { walletClient, chain, setChain } = useClient()
  const { switchNetworkAsync } = useSwitchNetwork()
  const [isSwitchingChain, setIsSwitchingChain] = useState(false)

  async function selectChain(chain: Chain) {
    try {
      setIsSwitchingChain(true)
      if (walletClient?.account) {
        if (typeof switchNetworkAsync === "function") {
          const setup = await switchNetworkAsync(chain.id)
          setChain(setup)
        } else {
          toast.error("An error occurred while switching networks")
        }
      } else {
        setChain(chain)
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
