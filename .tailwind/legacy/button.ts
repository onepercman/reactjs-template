import { apply } from "../utils"

const base = apply(
  "inline-flex items-center justify-center gap-2 py-0 font-medium whitespace-nowrap",
  "border border-transparent ring ring-transparent",
  "transition-colors cursor-pointer",
)

const states = {
  "&:disabled": apply("text-content/50 cursor-not-allowed saturate-50"),
}

const variants = {
  "&-default": {
    ...apply("bg-default"),
    "&:hover": apply("brightness-90"),
    "&:focus": apply("ring-default/50"),
  },
  "&-primary": {
    ...apply("bg-primary border-primary-300 text-white shadow"),
    "&:hover": apply("bg-primary-600"),
    "&:focus": apply("ring-primary/50"),
  },
  "&-primary-outlined": {
    ...apply("border border-primary text-primary shadow"),
    "&:hover": apply("border-primary-600 text-primary-600"),
    "&:focus": apply("ring-primary/50"),
  },
  "&-outlined": {
    ...apply("border border-default shadow"),
    "&:hover": apply("brightness-125"),
    "&:focus": apply("ring-default/50"),
  },
  "&-ghost": {
    ...apply("bg-transparent"),
    "&:hover": apply("brightness-75"),
  },
  "&-success": {
    ...apply("bg-success border-success-400 text-white shadow"),
    "&:hover": apply("bg-success-600"),
    "&:focus": apply("ring-success/50"),
  },
  "&-error": {
    ...apply("bg-error border-error-400 text-white shadow"),
    "&:hover": apply("bg-error-600"),
    "&:focus": apply("ring-error/50"),
  },
}

const shapes = {
  "&-normal": apply("rounded"),
  "&-pill": apply("rounded-full"),
  "&-rounded": apply("rounded-full aspect-square p-0"),
  "&-square": apply("rounded aspect-square p-0"),
}

const group = {
  "&-group": {
    ...apply("inline-flex"),
    "*:only-child": apply("!rounded"),
    "*:first-child": apply("!rounded-r-none"),
    "*:last-child": apply("!rounded-l-none"),
    "*:not(:last-child):not(:first-child)": apply("!rounded-none"),
    "*:not(:last-child)": apply("!border-r-0"),
  },
}

export const button = {
  ".btn": {
    ...base,
    ...states,
    ...variants,
    ...shapes,
    ...group,
  },
}
