import InternalSlider, { SliderProps } from "rc-slider"
import React from "react"

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(function ({ ...props }, ref) {
  return <InternalSlider ref={ref} {...props} />
})

Slider.displayName = "Slider"
