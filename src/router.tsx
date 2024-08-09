import { createBrowserRouter } from "react-router-dom"
import Home from "./features/home"
import { Empty } from "./libs/atoms/empty"
import { Layout } from "./shared/layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Empty />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
