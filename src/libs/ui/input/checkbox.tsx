import * as Ark from "@ark-ui/react"
import React from "react"
import { HiCheck } from "react-icons/hi"
import { VariantProps, tv } from "tailwind-variants"

const checkbox = tv({
  slots: {
    base: "inline-flex items-center gap-2 cursor-pointer",
    label: "",
    controlWrapper: "rounded flex",
    control: "m-auto",
  },
  variants: {
    variant: {
      filled: { controlWrapper: "text-white" },
      outlined: { controlWrapper: "border-2" },
    },
    color: {
      default: {},
      primary: {},
      error: {},
      info: {},
      success: {},
      warning: {},
    },
    size: {
      xs: { label: "text-xs", controlWrapper: "h-5 w-5 text-xs" },
      sm: { label: "text-sm", controlWrapper: "h-7 w-7 text-sm" },
      md: { label: "text-base", controlWrapper: "h-9 w-9 text-base" },
      lg: { label: "text-lg", controlWrapper: "h-10 w-10 text-lg" },
    },
    placement: {
      head: "flex-row",
      tail: "flex-row-reverse",
    },
  },
  defaultVariants: {
    size: "md",
    placement: "head",
    variant: "outlined",
    color: "primary",
  },
  compoundVariants: [
    { variant: "filled", color: "primary", class: { controlWrapper: "bg-primary" } },
    { variant: "filled", color: "error", class: { controlWrapper: "bg-error" } },
    { variant: "filled", color: "info", class: { controlWrapper: "bg-info" } },
    { variant: "filled", color: "success", class: { controlWrapper: "bg-success" } },
    { variant: "filled", color: "warning", class: { controlWrapper: "bg-warning" } },
    { variant: "outlined", color: "primary", class: { controlWrapper: "border-primary text-primary" } },
    { variant: "outlined", color: "error", class: { controlWrapper: "border-error text-error" } },
    { variant: "outlined", color: "info", class: { controlWrapper: "border-info text-info" } },
    { variant: "outlined", color: "success", class: { controlWrapper: "border-success text-success" } },
    { variant: "outlined", color: "warning", class: { controlWrapper: "border-warning text-warning" } },
  ],
})

type CheckboxVariantProps = VariantProps<typeof checkbox>

export interface CheckboxProps extends Omit<Ark.CheckboxRootProps, "color">, CheckboxVariantProps {}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(function (
  { className, variant, color, size, children, placement, ...props },
  ref,
) {
  const classes = checkbox({ size, variant, color, placement, className })

  return (
    <Ark.Checkbox.Root ref={ref} {...props} className={classes.base()}>
      <Ark.Checkbox.Label className={classes.label()}>{children}</Ark.Checkbox.Label>
      <div className={classes.controlWrapper()}>
        <Ark.Checkbox.Control className={classes.control()}>
          <Ark.Checkbox.Indicator>
            <HiCheck />
          </Ark.Checkbox.Indicator>
        </Ark.Checkbox.Control>
      </div>
      <Ark.Checkbox.HiddenInput />
    </Ark.Checkbox.Root>
  )
})

Checkbox.displayName = "Checkbox"
