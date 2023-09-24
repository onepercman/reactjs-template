import { cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export function apply(...inputs: string[]) {
  return {
    [`@apply ${twMerge(cx(inputs))}`]: {},
  }
}

export function appendDefault(colors: Record<any | 500, string>) {
  if (colors[500]) {
    return {
      ...colors,
      DEFAULT: colors[500],
    }
  }
  return colors
}
