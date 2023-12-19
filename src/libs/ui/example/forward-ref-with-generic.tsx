import React from "react"
import { ComposedForwardRefWithAsProps, ForwardedRefComponent } from "../utils/ref"

export interface TestElementProps<Data> {
  data?: Data
  render?(value: Data): void
}
interface TestElement extends ForwardedRefComponent {
  <Data = any>(props: ComposedForwardRefWithAsProps<"div", TestElementProps<Data>>): React.ReactElement | null
}

function forwardRefTestElement<Data = any>(
  render: <Data>(
    props: TestElementProps<Data> & React.HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, TestElementProps<Data>>(render) as unknown as TestElement
}

export const TestElement: TestElement = forwardRefTestElement(function ({ children, ...props }, ref) {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
})

TestElement.displayName = "TestElement"
