import { nextui } from "@nextui-org/react"
import tailwindForm from "@tailwindcss/forms"
import tailwindScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
    tailwindAnimate,
    tailwindScrollbar({ nocompatible: true }),
    tailwindForm({ strategy: "base" }),
    nextui({
      themes: {
        dark: {
          colors: {
            background: colors.gray[950],
            foreground: colors.gray[900],
            content1: colors.gray[800],
            content2: colors.gray[700],
            content3: colors.gray[600],
            content4: colors.gray[500],
            default: colors.gray[400],
            divider: colors.gray[800],
            primary: colors.amber,
            secondary: colors.gray[800],
            success: colors.green,
            danger: colors.red,
            warning: colors.yellow,
            overlay: colors.black,
            focus: colors.gray,
          },
        },
        light: {
          colors: {
            background: colors.white,
            foreground: colors.black,
            content1: colors.white,
            content2: colors.gray[100],
            content3: colors.gray[200],
            content4: colors.gray[300],
            default: colors.gray[100],
            divider: colors.gray[200],
            primary: colors.amber,
            secondary: colors.gray[400],
            success: colors.green,
            danger: colors.red,
            warning: colors.yellow,
            overlay: colors.black,
            focus: colors.gray,
          },
        },
      },
    }),
  ],
}

export default config
