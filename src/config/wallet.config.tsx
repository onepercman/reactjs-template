import { HiOutlineWallet } from "react-icons/hi2"
import { coinbaseWallet, injected } from "wagmi/connectors"

export const wallets = [
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
  // {
  //   name: "Wallet Connect",
  //   connector: walletConnect({ projectId: "" }),
  //   icon: (
  //     <img
  //       src="https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png"
  //       alt="Wallet Connect"
  //       className="h-[1em] w-[1em]"
  //     />
  //   ),
  //   downloadUrl: "",
  //   deepLink: "",
  // },
  // TODO: Add more wallet config
] as const
