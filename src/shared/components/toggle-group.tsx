"use client"

import { ToggleGroup as BaseToggleGroup } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const toggleGroup = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(toggleGroup)

const Root = withRoot(BaseToggleGroup.Root)
const RootProvider = withRoot(BaseToggleGroup.RootProvider)
const Context = withSlot(BaseToggleGroup.Context)
const Item = withSlot(BaseToggleGroup.Item)

export interface ToggleGroupProps extends ComposedTVProps<typeof toggleGroup> {}

export interface ToggleGroup extends ComponentMetadata {
  (props: ToggleGroupProps): React.ReactElement | null
}

export const ToggleGroup = createComponentTree(Root, {
  RootProvider,
  Context,
  Item,
})

ToggleGroup.displayName = "ToggleGroup"
