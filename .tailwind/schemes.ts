import colors from "tailwindcss/colors"
import { palette } from "./utils"

const schemes = {
  light: {
    default: colors.stone[100],
    primary: palette(colors.emerald),
    secondary: colors.emerald[500],
    body: colors.white,
    component: colors.white,
    muted: colors.neutral[200],
    content: colors.black,
    invert: colors.white,
    line: colors.neutral[300],
    success: palette(colors.green),
    warning: palette(colors.yellow),
    error: palette(colors.red),
  },
  dark: {
    default: colors.neutral[900],
    primary: palette(colors.emerald),
    secondary: colors.emerald[500],
    body: colors.neutral[950],
    component: colors.neutral[900],
    muted: colors.neutral[800],
    content: colors.white,
    invert: colors.black,
    line: colors.neutral[800],
    success: palette(colors.green),
    warning: palette(colors.yellow),
    error: palette(colors.red),
  },
}

export default schemes
