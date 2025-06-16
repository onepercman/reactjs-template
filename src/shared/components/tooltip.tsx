"use client"

import { Tooltip as BaseTooltip } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const tooltip = tv({
  slots: {
    content: [
      "z-[var(--z-index)] rounded border border-line bg-component px-3 py-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    arrow: "",
    arrowTip: "border-l border-t border-line !bg-component",
  },
  variants: {
    arrowSize: {
      md: { arrow: "[--arrow-size:0.5rem]" },
    },
    size: {
      sm: { content: "p-1 text-xs" },
      md: { content: "px-2 py-1 text-sm" },
      lg: { content: "px-3 py-2 text-base" },
    },
  },
  defaultVariants: {
    size: "md",
    arrowSize: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(tooltip)

const Root = withRoot(BaseTooltip.Root)
const RootProvider = withRoot(BaseTooltip.RootProvider)
const Context = withSlot(BaseTooltip.Context)
const Positioner = withSlot(BaseTooltip.Positioner)
const Trigger = withSlot(BaseTooltip.Trigger)
const Arrow = withSlot(BaseTooltip.Arrow, "arrow")
const ArrowTip = withSlot(BaseTooltip.ArrowTip, "arrowTip")
const Content = withSlot(BaseTooltip.Content, "content")

const CustomContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(function ({ children, ...props }, ref) {
  return (
    <Positioner>
      <Content ref={ref} {...props}>
        {children}
      </Content>
    </Positioner>
  )
})

CustomContent.displayName = "Content"

const CustomArrow = React.forwardRef<
  React.ElementRef<typeof Arrow>,
  React.ComponentPropsWithoutRef<typeof Arrow>
>(function ({ children, ...props }, ref) {
  return (
    <Arrow ref={ref} {...props}>
      <ArrowTip />
    </Arrow>
  )
})

CustomArrow.displayName = "Arrow"

export interface TooltipProps extends ComposedTVProps<typeof tooltip> {}

export interface Tooltip extends ComponentMetadata {
  (props: TooltipProps): React.ReactElement | null
}

export const Tooltip = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Positioner,
  Trigger,
  Arrow: CustomArrow,
  ArrowTip,
  Content: CustomContent,
})

Tooltip.displayName = "Tooltip"
