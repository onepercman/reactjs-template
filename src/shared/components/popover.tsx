"use client"

import { Popover as BasePopover } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const popover = tv({
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
    size: {
      sm: { content: "p-1 text-xs" },
      md: { content: "px-2 py-1 text-sm" },
      lg: { content: "px-3 py-2 text-base" },
    },
    arrowSize: {
      md: { arrow: "[--arrow-size:0.5rem]" },
    },
  },
  defaultVariants: {
    size: "md",
    arrowSize: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(popover)

const Root = withRoot(BasePopover.Root)
const RootProvider = withRoot(BasePopover.RootProvider)
const Anchor = withSlot(BasePopover.Anchor)
const Arrow = withSlot(BasePopover.Arrow, "arrow")
const ArrowTip = withSlot(BasePopover.ArrowTip, "arrowTip")
const CloseTrigger = withSlot(BasePopover.CloseTrigger)
const Context = withSlot(BasePopover.Context)
const Content = withSlot(BasePopover.Content, "content")
const Description = withSlot(BasePopover.Description)
const Indicator = withSlot(BasePopover.Indicator)
const Positioner = withSlot(BasePopover.Positioner)
const Title = withSlot(BasePopover.Title)
const Trigger = withSlot(BasePopover.Trigger)

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

export interface PopoverProps extends ComposedTVProps<typeof popover> {}

export interface Popover extends ComponentMetadata {
  (props: PopoverProps): React.ReactElement | null
}

export const Popover = createComponentTree(Root, {
  Root,
  RootProvider,
  Anchor,
  Arrow: CustomArrow,
  ArrowTip,
  CloseTrigger,
  Context,
  Content: CustomContent,
  Description,
  Indicator,
  Positioner,
  Title,
  Trigger,
})

Popover.displayName = "Popover"
