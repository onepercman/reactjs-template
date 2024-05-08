import React from "react"

export function useScrolled(delta = 0) {
  const [isScrolled, setIsScrolled] = React.useState(false)

  function scrollHandler() {
    setIsScrolled(window.scrollY > delta)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return function () {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return isScrolled
}
