import { useChainSetup } from "@/hooks/wallet/use-chain-setup"
import { Button } from "@/libs/ui/button"
import { Menu } from "@/libs/ui/menu"
import { FC } from "react"
import { HiGlobe } from "react-icons/hi"

export const ChainSelector: FC = () => {
  const { currentChain, chains, selectChain, isSwitchingChain } = useChainSetup()

  return (
    <Menu
      float={{
        placement: "bottom",
      }}
      menu={chains.map((chain) => ({
        label: chain.name,
        icon: <HiGlobe />,
        key: chain.id,
        disabled: chain.id === currentChain?.id,
      }))}
      onSelect={(id) => {
        const chain = chains.find((c) => c.id === id)
        if (chain) {
          selectChain(chain)
        }
      }}
    >
      <Button leftIcon={<HiGlobe />} loading={isSwitchingChain}>
        {currentChain?.name}
      </Button>
    </Menu>
  )
}
