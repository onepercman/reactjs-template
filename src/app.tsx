import { queryClient } from "@/libs/react-query"
import { ToasterContainer, VariantsProvider } from "@mojaui/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import "./styles/styles.scss"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <ToasterContainer />
        <VariantsProvider>
          <RouterProvider router={router} />
        </VariantsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
