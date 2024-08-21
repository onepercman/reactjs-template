import { Carousel } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { carousel } from "./variants"

const { withRoot, withSlot } = createCtx(carousel)

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

export const Component = createNested(Root, {
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
