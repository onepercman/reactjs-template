import { CnOptions, cn as tvcn } from "tailwind-variants"

export function cn<T extends CnOptions>(...classes: T): string {
  return tvcn(...classes)({ twMerge: true }) || ""
}
