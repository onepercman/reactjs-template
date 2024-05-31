import React from "react"
import { VariantProps, tv } from "tailwind-variants"

const radio = tv({
  base: "input-radio",
  variants: {
    size: {
      md: "h-4 w-4",
      sm: "h-3 w-3",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type RadioVariantProps = VariantProps<typeof radio>
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, RadioVariantProps {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function (
  { className, size, children, ...props },
  ref,
) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input ref={ref} type="radio" className={radio({ size, className })} {...props} />
      {children}
    </label>
  )
})

Radio.displayName = "Radio"
