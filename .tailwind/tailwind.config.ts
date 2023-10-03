import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import schemes from "./schemes"

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
      transitionTimingFunction: {
        expo: "cubic-bezier(0.5, 1.5, 0.8, 1)",
        "expo-in": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [
    require("tailwind-schemes")(schemes),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/forms")({ strategy: "base" }),
    require("tailwindcss-animate"),
    require("./reset"),
    require("./legacy"),
  ],
}

export default config
