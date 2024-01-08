import { wallets } from "@/config/wallet.config"
import { Dialog } from "@/libs/ui/dialog"
import { useClientStore } from "@/stores/client.store"
import { isDesktop } from "react-device-detect"
import { ProviderNotFoundError, useAccount, useConnect, useDisconnect } from "wagmi"

export function useActive() {
  const { isConnecting } = useAccount()
  const { chain, account } = useClientStore()
  const { connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()

  function connect() {
    const dialog = Dialog.open({
      title: "Select a wallet",
      className: "grid grid-cols-1 gap-1",
      width: 240,
      children: wallets.map((wallet) => (
        <button
          className="border-line/50 hover:bg-primary/5 inline-flex w-full items-center gap-2 rounded border object-contain p-2 transition-all"
          onClick={async function () {
            try {
              dialog.close()
              await connectAsync({
                connector: wallet.connector,
                chainId: chain.id,
              })
            } catch (err) {
              if (err instanceof ProviderNotFoundError) {
                if (isDesktop) {
                  window.open(wallet.downloadUrl, "_blank", "noopener noreferrer")
                } else {
                  window.open(wallet.deepLink, "_blank", "noopener noreferrer")
                }
              }
            }
          }}
        >
          <span>{wallet.icon}</span>
          <span className="text-sm">{wallet.name}</span>
        </button>
      )),
    })
  }

  async function disconnect() {
    disconnectAsync()
  }

  return {
    account,
    isConnecting,
    connect,
    disconnect,
  }
}
