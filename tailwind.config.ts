import { colorize, resetCSS, schemes } from "tailwind-schemes"
import tailwindScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import tailwindcssMotion from "tailwindcss-motion"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: { sans: [...defaultTheme.fontFamily.sans] },
      borderRadius: {
        DEFAULT: "6px",
      },
      keyframes: {
        collapse: { from: { height: "0px" }, to: { height: "var(--height)" } },
      },
      animation: {
        collapse: "collapse",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    tailwindcssMotion,
    tailwindScrollbar({ nocompatible: true }),
    schemes({
      schemes: {
        light: {
          background: colors.white,
          foreground: colors.black,
          primary: colorize(colors.orange, "500", "950"),
          secondary: colors.gray[500],
          muted: colors.gray[400],
          accent: colorize(colors.cyan, "500", "950"),
          default: colors.gray[100],
          component: colors.white,
          invert: colors.white,
          line: colors.gray[200],
          info: colorize(colors.sky, "500", "950"),
          success: colorize(colors.green, "500", "950"),
          warning: colorize(colors.yellow, "500", "950"),
          error: colorize(colors.red, "500", "950"),
        },
        dark: {
          background: colors.gray[950],
          foreground: colors.white,
          primary: colorize(colors.orange, "500", "50"),
          secondary: colors.gray[400],
          muted: colors.gray[700],
          accent: colorize(colors.cyan, "500", "50"),
          default: colors.gray[800],
          component: colors.gray[900],
          invert: colors.black,
          line: colors.gray[800],
          info: colorize(colors.sky, "500", "50"),
          success: colorize(colors.green, "500", "50"),
          warning: colorize(colors.yellow, "500", "50"),
          error: colorize(colors.red, "500", "50"),
        },
      },
    }),
    resetCSS({
      html: "bg-background text-foreground",
      "*": "scrollbar scrollbar-thumb-default scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-transparent",
    }),
  ],
}

export default config
