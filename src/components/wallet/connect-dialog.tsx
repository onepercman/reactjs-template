import { useActive } from "@/hooks/wallet/use-active"
import { Dialog } from "@/libs/ui/dialog"
import { wallets } from "@/libs/wagmi"
import { dialogManagerProxy, useDialogManagerProxy } from "@/models/dialog-manager.model"
import { FC } from "react"

const hasInjectedProvider = typeof window !== "undefined" && typeof window["ethereum"] !== "undefined"

export const ConnectDialog: FC = () => {
  const dialogManager = useDialogManagerProxy()
  const { connect } = useActive()

  return (
    <Dialog
      open={dialogManager.connect}
      onClose={function () {
        dialogManagerProxy.setConnect(false)
      }}
      title="Select a wallet"
      className="grid grid-cols-3 gap-2"
      width={240}
    >
      {wallets.map((wallet) =>
        !wallet.injected || (wallet.injected && hasInjectedProvider) ? (
          <img
            key={wallet.name}
            src={wallet.iconURI}
            title={wallet.name}
            role="button"
            className="border-line/50 w-full rounded-2xl border object-contain transition-all"
            onClick={() => connect(wallet)}
          />
        ) : null,
      )}
    </Dialog>
  )
}
