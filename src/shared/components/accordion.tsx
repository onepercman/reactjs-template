import {
  AccordionItem,
  Accordion as BaseAccordion,
  extendVariants,
} from "@heroui/react"

export const Accordion = extendVariants(BaseAccordion, {
  variants: {
    variant: {
      light: "bg-transparent",
      shadow: "shadow-lg",
      bordered: "border-medium",
      splitted: "divide-y divide-default-200",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
    },
    isCompact: {
      true: "gap-0",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "light",
    radius: "lg",
    isCompact: false,
    isDisabled: false,
  },
})

export { AccordionItem }
