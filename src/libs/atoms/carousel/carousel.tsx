import { Carousel } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { carousel } from "./variants"

const { withRoot, withSlot } = createComponentFactory(carousel)

const Root = withRoot(Carousel.Root)
const RootProvider = withRoot(Carousel.RootProvider)
const Context = withSlot(Carousel.Context)
const Control = withSlot(Carousel.Control)
const Indicator = withSlot(Carousel.Indicator)
const IndicatorGroup = withSlot(Carousel.IndicatorGroup)
const Item = withSlot(Carousel.Item)
const ItemGroup = withSlot(Carousel.ItemGroup)
const NextTrigger = withSlot(Carousel.NextTrigger)
const PrevTrigger = withSlot(Carousel.PrevTrigger)
const Viewport = withSlot(Carousel.Viewport)

export const Component = createComponentTree(Root, {
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

Component.displayName = "Carousel"
