"use client"

import React from "react"
import { ComposedForwardRefWithAsProps, ForwardedRefComponent, PropsWithAsAttributes, ReactTag } from "../utils/ref"

export interface TestElementProps<Data> {
  data?: Data
  render?(value: Data): void
}

interface TestElement<DefaultTag extends ReactTag = "div"> extends ForwardedRefComponent {
  <As extends ReactTag = DefaultTag, Data = any>(
    props: ComposedForwardRefWithAsProps<As, TestElementProps<Data>>,
  ): React.ReactElement | null
}

function forwardRefTestElement<As extends ReactTag = "div", Data = any>(
  render: <As extends ReactTag, Data>(
    props: PropsWithAsAttributes<TestElementProps<Data>, As>,
    ref: React.Ref<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, TestElementProps<Data>>(render) as unknown as TestElement<As>
}

export const TestElement = forwardRefTestElement(function ({ as = "div", children, ...props }, ref) {
  const Tag = as
  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  )
})

TestElement.displayName = "TestElement"
