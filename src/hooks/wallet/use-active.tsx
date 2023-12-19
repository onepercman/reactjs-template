import { ConnectorIds, Wallet, connectors } from "@/libs/wagmi"
import { appSettingStore } from "@/stores/app-setting.store"
import { useClientStore } from "@/stores/client.store"
import { useUserStore } from "@/stores/user.store"
import { isDesktop } from "react-device-detect"
import toast from "react-hot-toast"
import { UserRejectedRequestError } from "viem"
import { useAccount, useConnect, useDisconnect } from "wagmi"

export function useActive() {
  const { isConnecting } = useAccount()
  const { chain, walletClient } = useClientStore()
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

  function connect(wallet: Wallet) {
    appSettingStore.setShowConnectDialog(false)
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
  }

  async function disconnect() {
    disconnectAsync()
    logout()
  }

  return {
    account: walletClient?.account.address,
    isConnecting,
    connect,
    disconnect,
  }
}
