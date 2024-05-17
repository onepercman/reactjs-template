import { CnOptions, cn as tvcn } from "tailwind-variants"

export function cn<T extends CnOptions>(...classes: T): string {
  const className = tvcn(...classes)
  if (typeof className !== "string") return ""
  return className
}
