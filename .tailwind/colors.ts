import colors from "tailwindcss/colors"
import { appendDefault } from "./utils"

export const primary = {
  50: "#FCEBB7",
  100: "#FBE6A3",
  200: "#F9DB7C",
  300: "#F7D055",
  400: "#F5C62E",
  500: "#F0B90B",
  600: "#BA9009",
  700: "#856606",
  800: "#4F3D04",
  900: "#191401",
  950: "#000000",
}

const config = {
  light: {
    default: colors.stone[100],
    primary: appendDefault(primary),
    secondary: colors.emerald[500],
    body: colors.white,
    component: colors.white,
    muted: colors.neutral[200],
    content: colors.black,
    invert: colors.white,
    line: appendDefault(colors.neutral),
    success: appendDefault(colors.green),
    warning: appendDefault(colors.yellow),
    error: appendDefault(colors.red),
  },
  dark: {
    default: colors.gray[900],
    primary: appendDefault(primary),
    secondary: colors.emerald[500],
    body: colors.gray[950],
    component: colors.gray[900],
    muted: colors.gray[800],
    content: colors.white,
    invert: colors.black,
    line: appendDefault(colors.gray),
    success: appendDefault(colors.green),
    warning: appendDefault(colors.yellow),
    error: appendDefault(colors.red),
  },
}

export default config
