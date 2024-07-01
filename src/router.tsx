import Home from "@/routers/home"
import NotFound from "@/routers/not-found"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./shared/layout"

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
