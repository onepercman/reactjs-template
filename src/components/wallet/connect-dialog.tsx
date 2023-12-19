import { useActive } from "@/hooks/wallet/use-active"
import { Dialog } from "@/libs/ui/dialog"
import { wallets } from "@/libs/wagmi"
import { appSettingStore, useAppSettingStore } from "@/stores/app-setting.store"
import { FC } from "react"

const hasInjectedProvider = typeof window !== "undefined" && typeof window["ethereum"] !== "undefined"

export const ConnectDialog: FC = () => {
  const { showConnectDialog } = useAppSettingStore()
  const { connect } = useActive()

  return (
    <Dialog
      open={showConnectDialog}
      onClose={function () {
        appSettingStore.setShowConnectDialog(false)
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
