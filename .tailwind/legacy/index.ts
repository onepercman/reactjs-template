import plugin from "tailwindcss/plugin"
import { button } from "./button"
import { input, inputGroup } from "./input"
import { state } from "./state"

export default plugin(({ addComponents }) => {
  addComponents([state, button, input, inputGroup])
})
