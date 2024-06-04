import { Loader, ToasterContainer } from "@/libs/one-ui"
import { queryClient } from "@/libs/react-query"
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
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
