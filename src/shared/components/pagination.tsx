"use client"

import {
  Pagination as BasePagination,
  PaginationRootProps,
  UsePaginationContext,
} from "@ark-ui/react"
import React from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { cn, ComponentMetadata, ComposedTVProps } from "react-tvcx"
import { button, Button, ButtonProps } from "./button"

export interface PaginationProps
  extends Omit<PaginationRootProps, "color">,
    ComposedTVProps<typeof button> {
  activeProps?: ButtonProps
  inactiveProps?: ButtonProps
}

interface Pagination extends ComponentMetadata {
  (props: PaginationProps): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: PaginationProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, PaginationProps>(
    render,
  ) as unknown as Pagination
}

export const Pagination = _bootstrap(function (
  {
    className,
    size,
    variant,
    color,
    activeProps = { color: "primary" },
    inactiveProps,
    ...props
  },
  ref,
) {
  return (
    <BasePagination.Root
      ref={ref}
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <BasePagination.PrevTrigger asChild>
        <Button
          size={size}
          variant={variant}
          color={color}
          leftIcon={<LuChevronLeft />}
        />
      </BasePagination.PrevTrigger>

      <BasePagination.Context>
        {(pagination: UsePaginationContext) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <BasePagination.Item asChild key={index} value={page.value}>
                <Button
                  size={size}
                  variant={variant}
                  color={color}
                  {...(pagination.page === page.value
                    ? activeProps
                    : inactiveProps)}
                >
                  {page.value}
                </Button>
              </BasePagination.Item>
            ) : (
              <BasePagination.Ellipsis asChild key={index} index={index}>
                <Button
                  size={size}
                  variant={variant}
                  color={color}
                  className="pointer-events-none"
                >
                  &#8230;
                </Button>
              </BasePagination.Ellipsis>
            ),
          )
        }
      </BasePagination.Context>

      <BasePagination.NextTrigger asChild>
        <Button
          size={size}
          variant={variant}
          color={color}
          leftIcon={<LuChevronRight />}
        />
      </BasePagination.NextTrigger>
    </BasePagination.Root>
  )
})

Pagination.displayName = "Pagination"
