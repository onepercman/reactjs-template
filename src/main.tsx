import { queryClient } from "@/libs/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import ReactDOM from "react-dom/client"
import { WagmiProvider } from "wagmi"
import App from "./app"
import { wagmiAdapter } from "./config/web3.config"
import { AutoUpdateVersion } from "./features/root/auto-update-version"
import "./styles/styles.css"

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => {
      console.log("Service Worker registered!", reg)
    })
    .catch(err => {
      console.log("Service Worker registration failed:", err)
    })
  navigator.serviceWorker.addEventListener("message", event => {
    if (event.data?.type === "CLEAR_STORAGE") {
      console.log("Clearing localStorage due to app update...")
      localStorage.clear()
    }
  })
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <App />
        <AutoUpdateVersion />
      </WagmiProvider>
    </QueryClientProvider>
  </ThemeProvider>,
)
