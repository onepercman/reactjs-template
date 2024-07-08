import { colorize, resetCSS, schemes } from "tailwind-schemes"
import tailwindScrollbar from "tailwind-scrollbar"
import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: { sans: [...defaultTheme.fontFamily.sans] },
      keyframes: {
        collapse: {
          from: {
            height: "0px",
          },
          to: {
            height: "var(--height)",
          },
        },
      },
      animation: {
        collapse: "collapse",
      },
      boxShadow: {
        button:
          "0px 0px 10px 0px var(--color), 0px 1px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 0px 12px 0px var(--shadow-color) inset",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindScrollbar({ nocompatible: true }),
    schemes({
      schemes: {
        light: {
          background: colors.white,
          foreground: colors.black,
          primary: colorize(colors.emerald, "500", "950"),
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
          primary: colorize(colors.emerald, "500", "50"),
          secondary: colors.gray[400],
          muted: colors.gray[700],
          accent: colorize(colors.cyan, "500", "50"),
          default: colors.gray[800],
          component: colors.gray[900],
          invert: colors.black,
          line: colors.gray[700],
          info: colorize(colors.sky, "500", "50"),
          success: colorize(colors.green, "500", "50"),
          warning: colorize(colors.yellow, "500", "50"),
          error: colorize(colors.red, "500", "50"),
        },
      },
    }),
    resetCSS({
      html: "bg-background",
      "*": "scrollbar scrollbar-thumb-default scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-transparent",
    }),
  ],
}

export default config
