import { Card as BaseCard, extendVariants } from "@heroui/react"

export const Card = extendVariants(BaseCard, {
  variants: {
    variant: {
      flat: {
        base: "bg-transparent",
      },
      bordered: {
        base: "border-medium",
      },
      shadow: {
        base: "shadow-lg",
      },
      solid: {
        base: "",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-small",
      },
      md: {
        base: "rounded-medium",
      },
      lg: {
        base: "rounded-large",
      },
    },
    isPressable: {
      true: {
        base: "transition-transform-background motion-reduce:transition-none hover:-translate-y-2",
      },
    },
    isFooterBlurred: {
      true: {
        footer: "backdrop-blur-md backdrop-saturate-150 bg-background/70",
      },
    },
    isHoverable: {
      true: {
        base: "transition-background motion-reduce:transition-none hover:bg-content2",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    radius: "lg",
    isPressable: false,
    isFooterBlurred: false,
    isHoverable: false,
  },
})
