import { QrCode } from "@ark-ui/react"
import { createCtx, createFactory } from "../utils"
import { qrCode } from "./variants"

const { withRoot, withSlot } = createCtx(qrCode)

const Root = withRoot(QrCode.Root)
const RootProvider = withRoot(QrCode.RootProvider)
const QrCodeContext = withSlot(QrCode.QrCodeContext)
const Frame = withSlot(QrCode.Frame)
const Overlay = withSlot(QrCode.Overlay)
const Pattern = withSlot(QrCode.Pattern)

export const Component = createFactory(Root, {
  Root,
  RootProvider,
  QrCodeContext,
  Frame,
  Overlay,
  Pattern,
})

Component.displayName = "QrCode"
