import { TreeView } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { treeView } from "./variants"

const { withRoot, withSlot } = createComponentFactory(treeView)

const Root = withRoot(TreeView.Root)
const RootProvider = withRoot(TreeView.RootProvider)
const Context = withSlot(TreeView.Context)
const Branch = withSlot(TreeView.Branch)
const BranchContent = withSlot(TreeView.BranchContent)
const BranchControl = withSlot(TreeView.BranchControl)
const BranchIndicator = withSlot(TreeView.BranchIndicator)
const BranchText = withSlot(TreeView.BranchText)
const BranchTrigger = withSlot(TreeView.BranchTrigger)
const Item = withSlot(TreeView.Item)
const ItemContext = withSlot(TreeView.ItemContext)
const ItemIndicator = withSlot(TreeView.ItemIndicator)
const ItemText = withSlot(TreeView.ItemText)
const Label = withSlot(TreeView.Label)
const Tree = withSlot(TreeView.Tree)

export const Component = createComponentTree(Root, {
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
  ItemContext,
  ItemIndicator,
  ItemText,
  Label,
  Tree,
})

Component.displayName = "TreeView"
