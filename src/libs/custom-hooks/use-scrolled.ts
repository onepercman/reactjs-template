import React from "react"

export function useScrolled(delta = 0) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  function scrollHandler() {
    if (window.scrollY > delta) {
      if (!isScrolled) {
        setIsScrolled(true)
      }
    } else {
      if (isScrolled) {
        setIsScrolled(false)
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return function () {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return isScrolled
}
