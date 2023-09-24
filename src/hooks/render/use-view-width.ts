import { useEffect, useState } from "react"

export function useViewWidth() {
  const [viewWidth, setViewWidth] = useState<number>()

  function viewWidthHandler() {
    setViewWidth(window.innerWidth)
  }

  useEffect(() => {
    setViewWidth(window.innerWidth)
    window.addEventListener("resize", viewWidthHandler)

    return function () {
      window.removeEventListener("resize", viewWidthHandler)
    }
  }, [])

  return viewWidth
}
