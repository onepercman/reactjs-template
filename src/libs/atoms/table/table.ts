import { createComponentCtx } from "../utils"
import { table } from "../variants"

const { withRoot, withSlot } = createComponentCtx(table)

export const Wrapper = withRoot("div", "base")
export const Table = withSlot("table", "table")
export const THead = withSlot("thead")
export const TBody = withSlot("tbody")
export const Tr = withSlot("table", "tr")
export const TrHead = withSlot("table", "trHead")
export const Th = withSlot("table", "th")
export const Td = withSlot("table", "td")

export { Table as Compact } from "./compact"
