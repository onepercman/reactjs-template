import { queryClient } from "@/libs/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { VariantsProvider } from "mojaui"
import { ThemeProvider } from "next-themes"
import { RouterProvider } from "react-router-dom"
import { variants } from "./config/variants.config"
import { toaster } from "./libs/toast"
import { router } from "./router"
import "./styles/styles.scss"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <VariantsProvider customVariants={variants} toaster={toaster}>
          <RouterProvider router={router} />
        </VariantsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
