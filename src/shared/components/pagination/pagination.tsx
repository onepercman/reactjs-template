"use client"

import { Pagination, PaginationRootProps } from "@ark-ui/react"
import React from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { cn, ComponentMetadata, ComposedTVProps } from "react-tvcx"
import { button, Button, ButtonProps } from "../button"

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

export const Component = _bootstrap(function (
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
    <Pagination.Root
      ref={ref}
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <Pagination.PrevTrigger asChild>
        <Button
          size={size}
          variant={variant}
          color={color}
          leftIcon={<LuChevronLeft />}
        />
      </Pagination.PrevTrigger>

      <Pagination.Context>
        {pagination =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.Item asChild key={index} {...page}>
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
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis asChild key={index} index={index}>
                <Button
                  size={size}
                  variant={variant}
                  color={color}
                  className="pointer-events-none"
                >
                  &#8230;
                </Button>
              </Pagination.Ellipsis>
            ),
          )
        }
      </Pagination.Context>

      <Pagination.NextTrigger asChild>
        <Button
          size={size}
          variant={variant}
          color={color}
          leftIcon={<LuChevronRight />}
        />
      </Pagination.NextTrigger>
    </Pagination.Root>
  )
})

Component.displayName = "Pagination"
