"use client"

import { PropsWithAsAttributes, ReactTag, forwardRefWithGeneric } from "../utils/ref"

export interface TestElementProps<Data = any> {
  data?: Data
  render?(value: Data[]): Data
}

export const TestElement = forwardRefWithGeneric<"div", TestElementProps>(function <Data, As extends ReactTag>(
  { as, children, ...props }: PropsWithAsAttributes<TestElementProps<Data>, As>,
  ref: React.ForwardedRef<As>,
) {
  const Component = as || ("div" as ReactTag)

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
})

TestElement.displayName = "TestElement"
