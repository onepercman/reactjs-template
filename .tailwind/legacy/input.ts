import { apply } from "../utils"

const base = apply("border border-transparent rounded px-3 transition-all")

const states = {
  "&:hover": apply("shadow shadow-default"),
  "&:focus, &:focus-within, &:focus-visible": apply("ring ring-primary/50 border-primary outline-none"),
  "&:disabled": apply("opacity-50 saturate-50 cursor-not-allowed"),
}

const textarea = {
  "&-textarea": apply("py-3"),
}

const range = {
  "&-range": {
    ...apply("appearance-none h-4 overflow-hidden rounded bg-transparent cursor-pointer px-0"),
    "&:focus-visible::-webkit-slider-thumb": apply("shadow-none"),
    "&:focus-visible::-moz-range-thumb": apply("shadow-none"),
    "&::-webkit-slider-runnable-track": apply("bg-muted h-1 w-full rounded"),
    "&::-moz-range-track": apply("bg-muted h-1 w-full rounded"),
    "&::-webkit-slider-thumb": {
      ...apply(
        "bg-component relative h-4 w-4 rounded border-none appearance-none top-1/2 text-primary-400 -translate-y-1/2",
      ),
      boxShadow:
        "0 0 0 3px theme('colors.primary-400') inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem",
    },
    "&::-moz-range-thumb": {
      ...apply("bg-component relative h-4 w-4 rounded border-none top-1/2 text-primary-400"),
      boxShadow:
        "0 0 0 5px theme('colors.primary-400') inset, var(--focus-shadow, 0 0), calc(100rem * -1 - 0.5rem) 0 0 100rem",
    },
  },
}

const variants = {
  "&-filled": apply("bg-default"),
  "&-outlined": apply("bg-transparent border border-line"),
}

const elements = {
  "&-prefix": apply("pr-3"),
  "&-suffix": apply("pl-3"),
  "&-addon-before": {
    ...apply("-ml-3 mr-3 rounded-none"),
    "*": apply("rounded-none"),
  },
  "&-addon-after": {
    ...apply("-mr-3 ml-3 rounded-none"),
    "*": apply("rounded-none"),
  },
}

export const input = {
  ".input": {
    ...base,
    ...states,
    ...textarea,
    ...range,
    ...variants,
    ...elements,
  },
}

// Input group

export const inputGroup = {
  // Group
  ".input-group": {
    ...apply("inline-flex items-center overflow-hidden cursor-pointer"),
    input: apply("w-full h-full bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0"),
    "&-disabled": apply("opacity-50 saturate-50 cursor-not-allowed"),
  },
}
