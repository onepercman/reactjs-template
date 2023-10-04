import { useEffect, useRef, useState } from "react"

export function useContainerPositionPercentage(lower = false, higher = false) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollPercentage, setScrollPercentage] = useState<number>(0)

  function scrollHandler() {
    if (ref.current !== null) {
      const sectionHeight = ref.current.clientHeight
      const sectionTop = ref.current.getBoundingClientRect().top
      const percent = (sectionTop * -1) / (sectionHeight - sectionHeight / 2)
      if (percent <= 0) {
        if (lower) {
          setScrollPercentage(percent)
        } else {
          setScrollPercentage(0)
        }
      } else if (percent >= 1) {
        if (higher) {
          setScrollPercentage(percent)
        } else {
          setScrollPercentage(1)
        }
      } else {
        setScrollPercentage(percent)
      }
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    window.addEventListener("scroll", scrollHandler)

    return function () {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [lower, higher])

  return {
    ref,
    scrollPercentage,
  }
}
