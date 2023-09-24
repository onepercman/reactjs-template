"use client"

import React from "react"

export interface ImgBoundaryProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  altSrc: string
}

export const ImgBoundary = React.forwardRef<HTMLImageElement, ImgBoundaryProps>(
  ({ src, altSrc = "/favicon.ico", ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src || altSrc}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = altSrc
        }}
        {...props}
      />
    )
  },
)

ImgBoundary.displayName = "ImgBoundary"
