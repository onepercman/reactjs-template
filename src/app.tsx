import { queryClient } from "@/libs/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { ToasterContainer } from "./components/layout/toaster-container"
import { Loader } from "./libs/ui/loader"
import { router } from "./router"
import "./styles/styles.scss"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToasterContainer />
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </QueryClientProvider>
  )
}
