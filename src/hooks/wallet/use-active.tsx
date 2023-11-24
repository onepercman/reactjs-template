import { ConnectorIds, Wallet, connectors } from "@/libs/wagmi"
import { clientProxy } from "@/models/client.model"
import { dialogManagerProxy } from "@/models/dialog-manager.model"
import { userProxy } from "@/models/user.model"
import { isDesktop } from "react-device-detect"
import toast from "react-hot-toast"
import { useSnapshot } from "valtio"
import { UserRejectedRequestError } from "viem"
import { useAccount, useConnect, useDisconnect } from "wagmi"

export function useActive() {
  const { isConnecting } = useAccount()
  const { chain, walletClient } = useSnapshot(clientProxy)
  const { logout } = useSnapshot(userProxy)
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
    dialogManagerProxy.setConnect(false)
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

  function openConnectDialog() {
    dialogManagerProxy.setConnect(true)
  }

  return {
    account: walletClient?.account.address,
    isConnecting,
    connect,
    openConnectDialog,
    disconnect,
  }
}
