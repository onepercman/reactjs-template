"use client"

import InternalSlider, { SliderProps } from "rc-slider"
import React from "react"

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(({ ...props }, ref) => {
  return <InternalSlider ref={ref} {...props} />
})

Slider.displayName = "Slider"
