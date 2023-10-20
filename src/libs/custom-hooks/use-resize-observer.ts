import React, { useState } from "react"

export function useResizeObserver<T extends HTMLElement = any>() {
  const ref = React.useRef<T>(null)

  const [size, setSize] = useState<DOMRect>()

  const resizeObserver = React.useMemo(
    () =>
      new ResizeObserver(() => {
        if (ref.current) {
          setSize(ref.current.getBoundingClientRect())
        }
      }),
    [],
  )

  React.useEffect(() => {
    if (ref.current) {
      resizeObserver.observe(ref.current)
    }
    return () => {
      resizeObserver.disconnect()
    }
  }, [resizeObserver])

  return {
    ref,
    size,
  }
}
