"use client"

import { FC, SVGAttributes } from "react"

export const Loading: FC<SVGAttributes<SVGElement>> = function ({ ...props }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <rect x="1" y="6" width="2.8" rx="1" height="12">
        <animate
          id="spinner_CcmT"
          begin="0;spinner_IzZB.end-0.1s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="0;spinner_IzZB.end-0.1s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="5.8" y="6" width="2.8" rx="1" height="12">
        <animate
          begin="spinner_CcmT.begin+0.1s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.1s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="10.6" y="6" width="2.8" rx="1" height="12">
        <animate
          begin="spinner_CcmT.begin+0.2s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.2s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="15.4" y="6" width="2.8" rx="1" height="12">
        <animate
          begin="spinner_CcmT.begin+0.3s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.3s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="20.2" y="6" width="2.8" rx="1" height="12">
        <animate
          id="spinner_IzZB"
          begin="spinner_CcmT.begin+0.4s"
          attributeName="y"
          calcMode="spline"
          dur="0.6s"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.4s"
          attributeName="height"
          calcMode="spline"
          dur="0.6s"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
    </svg>
  )
}

Loading.displayName = "Loading"
