export interface WithFadeFromProps {
  snapPoints: (number | string)[]
  fadeFromIndex: number
}
export interface WithoutFadeFromProps {
  snapPoints?: (number | string)[]
  fadeFromIndex?: never
}
export type DialogProps = {
  activeSnapPoint?: number | string | null
  setActiveSnapPoint?: (snapPoint: number | string | null) => void
  children?: React.ReactNode
  open?: boolean
  closeThreshold?: number
  noBodyStyles?: boolean
  onOpenChange?: (open: boolean) => void
  shouldScaleBackground?: boolean
  setBackgroundColorOnScale?: boolean
  scrollLockTimeout?: number
  fixed?: boolean
  dismissible?: boolean
  handleOnly?: boolean
  onDrag?: (
    event: React.PointerEvent<HTMLDivElement>,
    percentageDragged: number,
  ) => void
  onRelease?: (event: React.PointerEvent<HTMLDivElement>, open: boolean) => void
  modal?: boolean
  nested?: boolean
  onClose?: () => void
  direction?: "top" | "bottom" | "left" | "right"
  preventScrollRestoration?: boolean
  disablePreventScroll?: boolean
} & (WithFadeFromProps | WithoutFadeFromProps)
