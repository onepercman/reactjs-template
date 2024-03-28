import { apply } from "../utils"

const base = apply("border border-transparent rounded px-small transition-all")

const states = {
  "&:hover": apply("shadow shadow-default"),
  "&:focus, &:focus-within, &:focus-visible": apply("ring ring-primary/50 border-primary outline-none"),
  "&:disabled": apply("opacity-50 saturate-50 cursor-not-allowed"),
}

const checkbox = {
  "&-checkbox": apply(
    "rounded bg-transparent text-primary",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary",
  ),
}

const radio = {
  "&-radio": apply(
    "rounded-full bg-transparent text-primary",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary",
  ),
}

const textarea = {
  "&-textarea": apply("p-small"),
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
  "&-prefix": apply("pr-small"),
  "&-suffix": apply("pl-small"),
  "&-addon-before": {
    ...apply("-ml-small mr-small rounded-none"),
    "*": apply("rounded-none"),
  },
  "&-addon-after": {
    ...apply("-mr-small ml-small rounded-none"),
    "*": apply("rounded-none"),
  },
}

export const input = {
  ".input": {
    ...base,
    ...states,
    ...variants,
    ...checkbox,
    ...radio,
    ...textarea,
    ...range,
    ...elements,
  },
}

// Input group

export const inputGroup = {
  // Group
  ".input-group": {
    ...apply("inline-flex items-center overflow-hidden cursor-pointer"),
    input: apply("grow h-full bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0"),
    "&-disabled": apply("opacity-50 saturate-50 cursor-not-allowed"),
  },
}
