import * as Ark from "@ark-ui/react"
import { twc } from "react-twc"

export const Collapsible = {
  Content: twc(
    Ark.Collapsible.Content,
  )`data-[state=open]:animate-collapse data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse !duration-200 overflow-hidden`,
  Context: Ark.Collapsible.Context,
  Root: Ark.Collapsible.Root,
  RootProvider: Ark.Collapsible.RootProvider,
  Trigger: Ark.Collapsible.Trigger,
}
