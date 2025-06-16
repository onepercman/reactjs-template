"use client"

import { Carousel as BaseCarousel } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"

export const carousel = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(carousel)

const Root = withRoot(BaseCarousel.Root)
const RootProvider = withRoot(BaseCarousel.RootProvider)
const Context = withSlot(BaseCarousel.Context)
const Control = withSlot(BaseCarousel.Control)
const Indicator = withSlot(BaseCarousel.Indicator)
const IndicatorGroup = withSlot(BaseCarousel.IndicatorGroup)
const Item = withSlot(BaseCarousel.Item)
const ItemGroup = withSlot(BaseCarousel.ItemGroup)
const NextTrigger = withSlot(BaseCarousel.NextTrigger)
const PrevTrigger = withSlot(BaseCarousel.PrevTrigger)
const Viewport = withSlot(BaseCarousel.Viewport)

export const Carousel = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  Indicator,
  IndicatorGroup,
  Item,
  ItemGroup,
  NextTrigger,
  PrevTrigger,
  Viewport,
})

Carousel.displayName = "Carousel"
