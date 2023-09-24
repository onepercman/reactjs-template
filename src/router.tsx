import Home from "@/pages/home"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/not-found"

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
