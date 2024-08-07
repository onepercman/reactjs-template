import { Menu, Portal } from "@ark-ui/react"
import React from "react"
import { createComponentCtx } from "../utils"
import { menu } from "./variants"

const { withRoot, withSlot } = createComponentCtx(menu)

export const Root = withRoot(Menu.Root)
export const RootProvider = withRoot(Menu.RootProvider)
export const Arrow = withSlot(Menu.Arrow)
export const ArrowTip = withSlot(Menu.ArrowTip)
export const CheckboxItem = withSlot(Menu.CheckboxItem)
export const Context = withSlot(Menu.Context)
export const ContextTrigger = withSlot(Menu.ContextTrigger)
export const Indicator = withSlot(Menu.Indicator)
export const Item = withSlot(Menu.Item, "item")
export const ItemContext = withSlot(Menu.ItemContext)
export const ItemGroup = withSlot(Menu.ItemGroup, "itemGroup")
export const ItemGroupLabel = withSlot(Menu.ItemGroupLabel, "itemGroupLabel")
export const ItemIndicator = withSlot(Menu.ItemIndicator, "itemIndicator")
export const ItemText = withSlot(Menu.ItemText)
export const Positioner = withSlot(Menu.Positioner)
export const RadioItem = withSlot(Menu.RadioItem, "item")
export const RadioItemGroup = withSlot(Menu.RadioItemGroup, "itemGroup")
export const Separator = withSlot(Menu.Separator, "separator")
export const Trigger = withSlot(Menu.Trigger)
export const TriggerItem = withSlot(Menu.TriggerItem)

export const ContentPrimitive = withSlot(Menu.Content, "content")

export const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <Portal>
      <Positioner>
        <ContentPrimitive ref={ref} {...props}>
          {children}
        </ContentPrimitive>
      </Positioner>
    </Portal>
  )
})

Content.displayName = "Content"
