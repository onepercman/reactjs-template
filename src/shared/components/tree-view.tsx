"use client"

import { TreeView as BaseTreeView } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const treeView = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(treeView)

const Root = withRoot(BaseTreeView.Root)
const RootProvider = withRoot(BaseTreeView.RootProvider)
const Context = withSlot(BaseTreeView.Context)
const Branch = withSlot(BaseTreeView.Branch)
const BranchContent = withSlot(BaseTreeView.BranchContent)
const BranchControl = withSlot(BaseTreeView.BranchControl)
const BranchIndicator = withSlot(BaseTreeView.BranchIndicator)
const BranchText = withSlot(BaseTreeView.BranchText)
const BranchTrigger = withSlot(BaseTreeView.BranchTrigger)
const Item = withSlot(BaseTreeView.Item)
const NodeContext = withSlot(BaseTreeView.NodeContext)
const NodeProvider = withSlot(BaseTreeView.NodeProvider)
const ItemIndicator = withSlot(BaseTreeView.ItemIndicator)
const ItemText = withSlot(BaseTreeView.ItemText)
const Label = withSlot(BaseTreeView.Label)
const Tree = withSlot(BaseTreeView.Tree)

export interface TreeViewProps extends ComposedTVProps<typeof treeView> {}

export interface TreeView extends ComponentMetadata {
  (props: TreeViewProps): React.ReactElement | null
}

export const TreeView = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Branch,
  BranchContent,
  BranchControl,
  BranchIndicator,
  BranchText,
  BranchTrigger,
  Item,
  NodeContext,
  NodeProvider,
  ItemIndicator,
  ItemText,
  Label,
  Tree,
})

TreeView.displayName = "TreeView"
