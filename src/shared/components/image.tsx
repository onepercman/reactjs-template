import { Image as BaseImage, extendVariants } from "@heroui/react"

export const Image = extendVariants(BaseImage, {
  slots: {
    base: "",
    img: "",
    fallback: "",
  },
  variants: {
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
      },
      md: {
        base: "rounded-md",
      },
      lg: {
        base: "rounded-lg",
      },
      full: {
        base: "rounded-full",
      },
    },
    isBlurred: {
      true: {
        img: "blur-sm",
      },
    },
    isZoomed: {
      true: {
        img: "hover:scale-105 transition-transform",
      },
    },
    shadow: {
      none: {
        base: "shadow-none",
      },
      sm: {
        base: "shadow-sm",
      },
      md: {
        base: "shadow-md",
      },
      lg: {
        base: "shadow-lg",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    isBlurred: false,
    isZoomed: false,
    shadow: "none",
  },
})
