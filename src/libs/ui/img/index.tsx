import React from "react"

type BaseImgProps = React.ImgHTMLAttributes<HTMLImageElement>

export interface ImgBoundaryProps extends BaseImgProps {
  altSrc: string
}

export const ImgBoundary = React.forwardRef<HTMLImageElement, ImgBoundaryProps>(function (
  { src, altSrc = "/favicon.ico", ...props },
  ref,
) {
  const _src = src || altSrc

  function _onError({ currentTarget }: React.BaseSyntheticEvent) {
    currentTarget.onerror = null
    currentTarget.src = altSrc
  }

  return <img ref={ref} src={_src} onError={_onError} {...props} />
})

ImgBoundary.displayName = "ImgBoundary"
