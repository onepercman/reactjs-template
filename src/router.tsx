import { Layout } from "@/components/layout"
import Home from "@/routers/home"
import NotFound from "@/routers/not-found"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
