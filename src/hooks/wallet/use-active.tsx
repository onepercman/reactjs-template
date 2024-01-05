import { Dialog } from "@/libs/ui/dialog"
import { ConnectorIds, connectors, wallets } from "@/libs/wagmi"
import { useClientStore } from "@/stores/client.store"
import { useUserStore } from "@/stores/user.store"
import { isDesktop } from "react-device-detect"
import toast from "react-hot-toast"
import { UserRejectedRequestError } from "viem"
import { useAccount, useConnect, useDisconnect } from "wagmi"

const hasInjectedProvider = typeof window !== "undefined" && typeof window["ethereum"] !== "undefined"

export function useActive() {
  const { isConnecting } = useAccount()
  const { chain, account } = useClientStore()
  const { logout } = useUserStore()
  const { connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()

  async function connect2ConnectorId(connectorId: ConnectorIds) {
    try {
      const connector = connectors[connectorId]
      await connectAsync({
        connector,
        chainId: chain.id,
      })
    } catch (err) {
      if (err instanceof UserRejectedRequestError) {
        toast.error("You have rejected the connect request")
      }
    }
  }

  function connect() {
    const dialog = Dialog.open({
      title: "Select a wallet",
      className: "grid grid-cols-3 gap-2",
      width: 240,
      children: wallets.map((wallet) =>
        !wallet.injected || (wallet.injected && hasInjectedProvider) ? (
          <img
            key={wallet.name}
            src={wallet.iconURI}
            title={wallet.name}
            role="button"
            className="border-line/50 w-full rounded-2xl border object-contain transition-all"
            onClick={function () {
              dialog.close()
              if (wallet.injected) {
                connect2ConnectorId(wallet.connectorId)
              } else if (wallet.connectorId === ConnectorIds.WalletConnect) {
                connect2ConnectorId(wallet.connectorId)
              } else if (isDesktop) {
                // In Desktop
                if (typeof window.ethereum !== "undefined" && window.ethereum[wallet.etherId]) {
                  connect2ConnectorId(wallet.connectorId)
                } else if (wallet.mobileOnly) {
                  connect2ConnectorId(ConnectorIds.WalletConnect)
                } else {
                  window.open(wallet.downloadUrl, "_blank", "noopener noreferrer")
                }
              } else {
                // In Mobile
                if (typeof window.ethereum !== "undefined") {
                  connect2ConnectorId(wallet.connectorId)
                } else if (wallet.deepLink) {
                  window.open(wallet.deepLink, "_blank", "noopener noreferrer")
                } else {
                  connect2ConnectorId(ConnectorIds.WalletConnect)
                }
              }
            }}
          />
        ) : null,
      ),
    })
  }

  async function disconnect() {
    disconnectAsync()
    logout()
  }

  return {
    account,
    isConnecting,
    connect,
    disconnect,
  }
}
