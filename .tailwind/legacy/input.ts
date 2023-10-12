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
