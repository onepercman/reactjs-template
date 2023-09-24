import { HOST } from "@/config/host.config"
import { walletConnectId } from "@/config/wallet-connect.config"
import { Chain, configureChains, createConfig, mainnet } from "wagmi"
import { bsc, bscTestnet, fantom, fantomTestnet, goerli } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { publicProvider } from "wagmi/providers/public"

export const supportedChains: Chain[] = [mainnet, bsc, bscTestnet, fantom, fantomTestnet, goerli]

export const { publicClient, webSocketPublicClient } = configureChains(supportedChains, [publicProvider()])

export enum ConnectorIds {
  Injected = "injected",
  WalletConnect = "walletconnect",
}

export const connectors = {
  [ConnectorIds.Injected]: new InjectedConnector({
    chains: supportedChains,
    options: {},
  }),
  [ConnectorIds.WalletConnect]: new WalletConnectConnector({
    chains: supportedChains,
    options: {
      projectId: walletConnectId,
    },
  }),
}

export const wagmiConfig = createConfig({
  publicClient,
  webSocketPublicClient,
  autoConnect: true,
  connectors: [connectors[ConnectorIds.Injected], connectors[ConnectorIds.WalletConnect]],
  logger: {
    warn(message) {
      console.warn(`🌐 Client: `, message)
    },
  },
})

export interface Wallet {
  injected: boolean
  name: string
  connectorId: ConnectorIds
  etherId: string
  mobileOnly: boolean
  iconURI: string
  downloadUrl: string
  deepLink: string
}

export const wallets: Wallet[] = [
  {
    injected: true,
    name: "Injected",
    connectorId: ConnectorIds.Injected,
    etherId: "",
    mobileOnly: false,
    iconURI: "/wallets/injected.png",
    downloadUrl: "",
    deepLink: "",
  },
  {
    injected: false,
    name: "MetaMask",
    connectorId: ConnectorIds.Injected,
    etherId: "isMetaMask",
    mobileOnly: false,
    iconURI: "/wallets/metamask.png",
    downloadUrl: "https://metamask.io/download/",
    deepLink: `https://metamask.app.link/dapp/${HOST}`,
  },
  {
    injected: false,
    name: "Opera Wallet",
    connectorId: ConnectorIds.Injected,
    etherId: "isOpera",
    mobileOnly: false,
    iconURI: "/wallets/opera.png",
    downloadUrl: "https://www.opera.com/crypto/next",
    deepLink: "",
  },
  {
    injected: false,
    name: "MathWallet",
    connectorId: ConnectorIds.Injected,
    etherId: "isMathWallet",
    mobileOnly: false,
    iconURI: "/wallets/mathwallet.png",
    downloadUrl: "https://mathwallet.org/",
    deepLink: `mathwallet://mathwallet.org?action=link&value=${HOST}`,
  },
  {
    injected: false,
    name: "SafePal",
    connectorId: ConnectorIds.Injected,
    etherId: "isSafePal",
    mobileOnly: false,
    iconURI: "/wallets/safepal.png",
    downloadUrl: "https://safepal.io/download",
    deepLink: "",
  },
  {
    injected: false,
    name: "TokenPocket",
    connectorId: ConnectorIds.Injected,
    etherId: "isTokenPocket",
    mobileOnly: false,
    iconURI: "/wallets/tokenpocket.png",
    downloadUrl: "https://www.tokenpocket.pro/",
    deepLink: `https://tokenpocket.github.io/applink?dappUrl=${HOST}`,
  },
  {
    injected: false,
    name: "Coin98",
    connectorId: ConnectorIds.Injected,
    etherId: "isCoin98",
    mobileOnly: false,
    iconURI: "/wallets/coin98.png",
    downloadUrl: "https://coin98.net/",
    deepLink: "",
  },
  {
    injected: false,
    name: "Trust Wallet",
    connectorId: ConnectorIds.Injected,
    etherId: "isTrust",
    mobileOnly: false,
    iconURI: "/wallets/trustwallet.png",
    downloadUrl: "https://trustwallet.com/",
    deepLink: `https://link.trustwallet.com/open_url?coin_id=714&url=${HOST}`,
  },
  // {
  //   injected: false,
  //   name: "Rice Wallet",
  //   connectorId: ConnectorIds.Injected,
  //   etherId: "isRiceWallet",
  //   mobileOnly: true,
  //   iconURI: "/wallets/ricewallet.png",
  //   downloadUrl: "https://ricewallet.io/",
  //   deepLink: "",
  // },
  {
    injected: false,
    name: "Wallet Connect",
    connectorId: ConnectorIds.WalletConnect,
    etherId: "",
    mobileOnly: false,
    iconURI: "/wallets/walletconnect.png",
    downloadUrl: "",
    deepLink: "",
  },
]
