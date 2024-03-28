import { apply } from "../utils"

export const size = {
  ".size-xs": apply("h-[1.5rem] min-h-[1.5rem] min-w-[1.5rem] px-1 text-xs"),
  ".size-sm": apply("h-[2rem] min-h-[2rem] min-w-[2rem] px-2 text-sm"),
  ".size-md": apply("h-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] px-4"),
  ".size-lg": apply("h-[3rem] min-h-[3rem] min-w-[3rem] px-4"),
}
