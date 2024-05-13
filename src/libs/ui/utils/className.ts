import { twMerge } from "tailwind-merge"
import { CnOptions, cnBase } from "tailwind-variants"

export function cn(...inputs: CnOptions) {
  return twMerge(cnBase(inputs))
}
