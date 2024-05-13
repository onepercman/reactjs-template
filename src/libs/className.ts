import { twMerge } from "tailwind-merge"
import { cnBase } from "tailwind-variants"

export function cn(...inputs: any[]) {
  return twMerge(cnBase(inputs))
}
