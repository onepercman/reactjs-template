import plugin from "tailwindcss/plugin"
import { button } from "./button"
import { input, inputGroup } from "./input"
import { size } from "./size"
import { state } from "./state"

export default plugin(({ addComponents }) => {
  addComponents([size, state, button, input, inputGroup])
})
