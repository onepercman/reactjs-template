"use client"

import { HoverCard as BaseHoverCard } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const hoverCard = tv({
  slots: {
    content: [
      "[--arrow-size]:[6px]",
      "[--arrow-offset]:[-3px]",
      "z-[var(--z-index)] rounded border border-line bg-component px-3 py-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    arrowTip: "border-l border-t border-line !bg-component",
  },
  variants: {
    size: {
      sm: { content: "p-1 text-xs" },
      md: { content: "px-2 py-1 text-sm" },
      lg: { content: "px-3 py-2 text-base" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(hoverCard)

const Root = withRoot(BaseHoverCard.Root)
const RootProvider = withRoot(BaseHoverCard.RootProvider)
const Context = withSlot(BaseHoverCard.Context)
const Positioner = withSlot(BaseHoverCard.Positioner)
const Trigger = withSlot(BaseHoverCard.Trigger)
const Arrow = withSlot(BaseHoverCard.Arrow)
const ArrowTip = withSlot(BaseHoverCard.ArrowTip, "arrowTip")
const Content = withSlot(BaseHoverCard.Content, "content")

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

export interface HoverCardProps extends ComposedTVProps<typeof hoverCard> {}

export interface HoverCard extends ComponentMetadata {
  (props: HoverCardProps): React.ReactElement | null
}

export const HoverCard = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Positioner,
  Trigger,
  Arrow: CustomArrow,
  ArrowTip,
  Content: CustomContent,
})

HoverCard.displayName = "HoverCard"
