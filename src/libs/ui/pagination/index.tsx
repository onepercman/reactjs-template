import { cn } from "@/libs/className"
import React from "react"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import { Button, ButtonProps } from "../button"

export interface PaginationProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  total?: number
  offset?: number
  limit?: number
  size?: ButtonProps["size"]
  setOffset?(offset: number): void
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(function (
  { total = 0, limit = 0, offset = 0, setOffset = function () {}, className, size = "xs", ...props },
  ref,
) {
  const page = React.useMemo(() => Math.ceil((offset + 1) / limit), [offset, limit])

  const totalPage = React.useMemo(() => Math.ceil(total / limit) || 0, [total, limit])

  const pageList = new Array(totalPage).fill(0).map((_, index) => (
    <Button
      size={size}
      key={index}
      shape="pill"
      variant={page === index + 1 ? "primary" : "default"}
      onClick={() => setOffset(index * limit)}
      className="min-w-[2em]"
    >
      {index + 1}
    </Button>
  ))

  const prev = (
    <Button
      size={size}
      variant="default"
      leftIcon={<HiChevronDoubleLeft />}
      onClick={function () {
        setOffset(offset - limit)
      }}
      disabled={page <= 1}
    />
  )

  const next = (
    <Button
      size={size}
      variant="default"
      leftIcon={<HiChevronDoubleRight />}
      onClick={function () {
        setOffset(limit + offset)
      }}
      disabled={page >= totalPage}
    />
  )

  if (total <= limit) return null

  return (
    <div ref={ref} className={cn("flex w-full justify-center", className)} {...props}>
      <div className="flex items-center gap-2">
        {prev}
        {pageList[0]}
        {page > 4 ? (
          <Button size={size} variant="ghost">
            ...
          </Button>
        ) : null}
        {pageList.slice(1, totalPage - 1).slice(page - 4 > 0 ? page - 4 : 0, page + 1)}
        {page < totalPage - 3 ? (
          <Button size={size} variant="ghost">
            ...
          </Button>
        ) : null}
        {pageList[totalPage - 1]}
        {next}
      </div>
    </div>
  )
})

Pagination.displayName = "Pagination"
