import { nextui } from "@nextui-org/react"
import tailwindForm from "@tailwindcss/forms"
import tailwindScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      screens: {
        default: "1230px",
        mobile: "390px",
        tablet: "820px",
        retina: "1440px",
        fhd: "1920px",
        qhd: "2560px",
        uhd: "3840px",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    tailwindForm({ strategy: "base" }),
    nextui(),
    tailwindAnimate,
  ],
}

export default config
