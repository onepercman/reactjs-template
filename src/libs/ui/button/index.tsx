import { Button, ButtonProps, extendVariants } from "@nextui-org/react"
import React from "react"

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, isLoading, onClick, ...props },
  ref,
) {
  const [asyncLoading, setAsyncLoading] = React.useState(false)

  async function _onClick(ev: React.MouseEvent<HTMLButtonElement>) {
    if (!onClick) return
    if (onClick.constructor.name === "AsyncFunction") {
      try {
        setAsyncLoading(true)
        onClick && (await onClick(ev))
      } catch (err) {
        throw new Error(err as any)
      } finally {
        setAsyncLoading(false)
      }
    } else {
      onClick(ev)
    }
  }

  const _loading = asyncLoading || isLoading

  return (
    <Button
      ref={ref}
      onClick={_onClick}
      isLoading={_loading}
      disableRipple
      disableAnimation
      {...props}
    >
      {children}
    </Button>
  )
})

const StyledButton = extendVariants(CustomButton, {})

export { StyledButton as Button }
