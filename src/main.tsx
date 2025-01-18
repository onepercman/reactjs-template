import { queryClient } from "@/libs/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import ReactDOM from "react-dom/client"
import { WagmiProvider } from "wagmi"
import App from "./app"
import { wagmiAdapter } from "./config/web3.config"
import "./styles/styles.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="dark">
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </ThemeProvider>,
)
