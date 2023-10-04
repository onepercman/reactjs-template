import { Layout } from "@/components/app/layout"
import { ToasterContainer } from "@/components/app/toaster-container"
import { AuthSentry } from "@/components/wallet/auth-sentry"
import { ConnectDialog } from "@/components/wallet/connect-dialog"
import { RequiredChainSentry } from "@/components/wallet/required-chain-sentry"
import { queryClient } from "@/libs/react-query"
import { swrConfig } from "@/libs/swr"
import { wagmiConfig } from "@/libs/wagmi"
import { QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from "swr"
import { WagmiConfig } from "wagmi"
import { ClientSentry } from "./components/wallet/client-sentry"
import "./styles/styles.scss"

export default function App() {
  return (
    <BrowserRouter>
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <SWRConfig value={swrConfig}>
            <ClientSentry />
            <RequiredChainSentry />
            <AuthSentry />
            <ConnectDialog />
            <ToasterContainer />
            <Layout />
          </SWRConfig>
        </QueryClientProvider>
      </WagmiConfig>
    </BrowserRouter>
  )
}
