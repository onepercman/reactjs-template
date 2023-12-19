import plugin from "tailwindcss/plugin"
import { apply } from "./utils"

export default plugin(({ addBase }) => {
  addBase({
    html: apply(
      "antialiased text-content",
      "touch-manipulation",
      "overflow-x-hidden",
      "subpixel-antialiased",
      "scroll-smooth",
      "min-h-full",
      "bg-body",
      "scrollbar scrollbar-w-1 scrollbar-h-1 scrollbar-track-transparent scrollbar-thumb-line scrollbar-thumb-rounded",
    ),
    "::selection": apply("text-content bg-primary"),
    button: apply("focus:outline-none"),
    "[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select":
      {
        ...apply("p-0"),
        "&:focus": apply("border-transparent ring-transparent"),
      },
    // Remove autofill default background
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
      {
        transition: "background-color 5000s ease-in-out 0s",
        "-webkit-text-fill-color": "#fff !important",
      },
  })
})
