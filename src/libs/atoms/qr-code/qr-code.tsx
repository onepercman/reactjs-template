import { QrCode } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { qrCode } from "./variants"

const { withRoot, withSlot } = createComponentCtx(qrCode)

const Root = withRoot(QrCode.Root)
const RootProvider = withRoot(QrCode.RootProvider)
const QrCodeContext = withSlot(QrCode.QrCodeContext)
const Frame = withSlot(QrCode.Frame)
const Overlay = withSlot(QrCode.Overlay)
const Pattern = withSlot(QrCode.Pattern)

export const Component = createRootComponent(Root, {
  Root,
  RootProvider,
  QrCodeContext,
  Frame,
  Overlay,
  Pattern,
})

Component.displayName = "QrCode"
