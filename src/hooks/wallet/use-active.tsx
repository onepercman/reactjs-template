import { walletConnectId } from "@/config/wallet-connect.config"
import { Dialog } from "@/libs/ui/dialog"
import { useClientStore } from "@/stores/client.store"
import { ReactNode } from "react"
import { isDesktop } from "react-device-detect"
import { HiOutlineWallet } from "react-icons/hi2"
import { CreateConnectorFn, ProviderNotFoundError, useAccount, useConnect, useDisconnect } from "wagmi"
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"

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

interface Wallet {
  name: string
  connector: CreateConnectorFn
  icon: ReactNode
  downloadUrl: string
  deepLink: string
}

const wallets: Wallet[] = [
  {
    name: "Injected",
    connector: injected(),
    icon: <HiOutlineWallet />,
    downloadUrl: "",
    deepLink: "",
  },
  {
    name: "MetaMask",
    connector: injected({ target: "metaMask" }),
    icon: (
      <img
        src="https://altcoinsbox.com/wp-content/uploads/2023/03/metamask-logo-600x600.webp"
        alt="MetaMask"
        className="h-[1em] w-[1em]"
      />
    ),
    downloadUrl: "https://metamask.io/download/",
    deepLink: `https://metamask.app.link/dapp/${window.origin}`,
  },
  {
    name: "Coinbase",
    connector: coinbaseWallet({ appName: "App" }),
    icon: (
      <img
        src="https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo-600x600.webp"
        alt="Coinbase"
        className="h-[1em] w-[1em]"
      />
    ),
    downloadUrl: "https://www.coinbase.com/wallet/downloads",
    deepLink: `https://go.cb-w.com/dapp?cb_url=${window.origin}`,
  },
  {
    name: "Wallet Connect",
    connector: walletConnect({ projectId: walletConnectId }),
    icon: (
      <img
        src="https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png"
        alt="Wallet Connect"
        className="h-[1em] w-[1em]"
      />
    ),
    downloadUrl: "",
    deepLink: "",
  },
  // TODO: Add more wallet config
]
