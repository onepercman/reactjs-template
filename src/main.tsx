import { queryClient } from "@/libs/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import ReactDOM from "react-dom/client"
import App from "./app"
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
      <App />
    </QueryClientProvider>
  </ThemeProvider>,
)
