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
    schemes({
      schemes: {
        light: {
          background: colors.white,
          foreground: colors.black,
          primary: colorize(colors.emerald),
          secondary: colors.neutral[200],
          muted: colors.neutral[200],
          accent: colorize(colors.cyan),
          default: colors.stone[100],
          component: colors.white,
          invert: colors.white,
          line: colors.neutral[300],
          info: colorize(colors.sky),
          success: colorize(colors.green),
          warning: colorize(colors.yellow),
          error: colorize(colors.red),
        },
        dark: {
          background: colors.neutral[950],
          foreground: colors.white,
          primary: colorize(colors.emerald),
          secondary: colors.neutral[800],
          muted: colors.neutral[800],
          accent: colorize(colors.cyan),
          default: colors.neutral[900],
          component: colors.neutral[900],
          invert: colors.black,
          line: colors.neutral[800],
          info: colorize(colors.sky),
          success: colorize(colors.green),
          warning: colorize(colors.yellow),
          error: colorize(colors.red),
        },
      },
    }),
    resetCSS({
      html: "bg-background",
    }),
  ],
}

export default config
