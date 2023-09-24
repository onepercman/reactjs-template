import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import "./styles/styles.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
