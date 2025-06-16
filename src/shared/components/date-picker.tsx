"use client"

import {
  DatePicker as BaseDatePicker,
  DatePickerRootProps,
} from "@ark-ui/react"
import React, { Fragment } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"
import { Button } from "./button"

export const datePicker = tv({
  slots: {
    content: [
      "w-fit rounded border border-line bg-component p-2 shadow",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    control: "inline-flex items-center gap-2",
    trigger: "inline-flex items-center gap-2",
    viewControl: "inline-flex w-full items-center justify-between gap-2 py-2",
    table: "border-separate border-spacing-1",
    tableHeader: "text-xs font-normal text-secondary",
    tableCellTrigger: [
      "relative inline-flex w-full items-center justify-center rounded px-2 py-1.5 text-xs font-normal",
      "hover:bg-primary/20",
      "data-[in-range]:bg-primary/50",
      "data-[selected]:bg-primary",
      "data-[selected]:hover:bg-primary",
      "data-[disabled]:text-muted",
      "data-[today]:after:content-['']",
      "data-[today]:after:absolute",
      "data-[today]:after:bottom-0",
      "data-[today]:after:w-1",
      "data-[today]:after:h-1",
      "data-[today]:after:rounded-full",
      "data-[today]:after:bg-primary",
    ],
  },
  variants: {},
  defaultVariants: {},
})

const { withRoot, withSlot } = createComponentFactory(datePicker)

const Root = withRoot(BaseDatePicker.Root)
const RootProvider = withRoot(BaseDatePicker.RootProvider)
const ClearTrigger = withSlot(BaseDatePicker.ClearTrigger)
const Content = withSlot(BaseDatePicker.Content, "content")
const Context = withSlot(BaseDatePicker.Context)
const Control = withSlot(BaseDatePicker.Control, "control")
const Input = withSlot(BaseDatePicker.Input)
const Label = withSlot(BaseDatePicker.Label)
const MonthSelect = withSlot(BaseDatePicker.MonthSelect)
const NextTrigger = withSlot(BaseDatePicker.NextTrigger)
const Positioner = withSlot(BaseDatePicker.Positioner)
const PresetTrigger = withSlot(BaseDatePicker.PresetTrigger)
const PrevTrigger = withSlot(BaseDatePicker.PrevTrigger)
const RangeText = withSlot(BaseDatePicker.RangeText)
const Table = withSlot(BaseDatePicker.Table, "table")
const TableBody = withSlot(BaseDatePicker.TableBody)
const TableCell = withSlot(BaseDatePicker.TableCell)
const TableCellTrigger = withSlot(
  BaseDatePicker.TableCellTrigger,
  "tableCellTrigger",
)
const TableHead = withSlot(BaseDatePicker.TableHead)
const TableHeader = withSlot(BaseDatePicker.TableHeader, "tableHeader")
const TableRow = withSlot(BaseDatePicker.TableRow)
const Trigger = withSlot(BaseDatePicker.Trigger, "trigger")
const View = withSlot(BaseDatePicker.View)
const ViewControl = withSlot(BaseDatePicker.ViewControl, "viewControl")
const ViewTrigger = withSlot(BaseDatePicker.ViewTrigger)
const YearSelect = withSlot(BaseDatePicker.YearSelect)

export interface DatePickerCompactProps
  extends DatePickerRootProps,
    ComposedTVProps<typeof datePicker> {}

export interface DatePicker extends ComponentMetadata {
  (props: DatePickerCompactProps): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: DatePickerCompactProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, DatePickerCompactProps>(
    render,
  ) as unknown as DatePicker
}

const CustomRoot = _bootstrap(function (
  { children, positioning, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      asChild
      positioning={{ placement: "bottom-end", ...positioning }}
      {...props}
    >
      <Fragment>{children}</Fragment>
    </Root>
  )
})

const CustomContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(function ({ ...props }, ref) {
  return (
    <Positioner>
      <Content ref={ref} {...props} />
    </Positioner>
  )
})

CustomContent.displayName = "Content"

const SimpleViews = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(function () {
  return (
    <>
      {/* VIEW DAY */}
      <View view="day">
        <Context>
          {datePicker => (
            <>
              <ViewControl>
                <PrevTrigger asChild>
                  <Button leftIcon={<LuChevronLeft />} />
                </PrevTrigger>
                <ViewTrigger asChild>
                  <Button>
                    <RangeText />
                  </Button>
                </ViewTrigger>
                <NextTrigger asChild>
                  <Button leftIcon={<LuChevronRight />} />
                </NextTrigger>
              </ViewControl>
              <Table>
                <TableHead>
                  <TableRow>
                    {datePicker.weekDays.map((weekDay, id) => (
                      <TableHeader key={id}>{weekDay.narrow}</TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datePicker.weeks.map((week, id) => (
                    <TableRow key={id}>
                      {week.map((day, id) => (
                        <TableCell key={id} value={day}>
                          <TableCellTrigger>{day.day}</TableCellTrigger>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </Context>
      </View>
      {/* VIEW MONTH */}
      <View view="month">
        <Context>
          {datePicker => (
            <>
              <ViewControl>
                <PrevTrigger asChild>
                  <Button leftIcon={<LuChevronLeft />} />
                </PrevTrigger>
                <ViewTrigger asChild>
                  <Button>
                    <RangeText />
                  </Button>
                </ViewTrigger>
                <NextTrigger asChild>
                  <Button leftIcon={<LuChevronRight />} />
                </NextTrigger>
              </ViewControl>
              <Table>
                <TableBody>
                  {datePicker
                    .getMonthsGrid({ columns: 4, format: "short" })
                    .map((months, id) => (
                      <TableRow key={id}>
                        {months.map((month, id) => (
                          <TableCell key={id} value={month.value}>
                            <TableCellTrigger>{month.label}</TableCellTrigger>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </>
          )}
        </Context>
      </View>
      {/* VIEW YEAR */}
      <View view="year">
        <Context>
          {datePicker => (
            <>
              <ViewControl>
                <PrevTrigger asChild>
                  <Button leftIcon={<LuChevronLeft />} />
                </PrevTrigger>
                <ViewTrigger asChild>
                  <Button>
                    <RangeText />
                  </Button>
                </ViewTrigger>
                <NextTrigger asChild>
                  <Button leftIcon={<LuChevronRight />} />
                </NextTrigger>
              </ViewControl>
              <Table>
                <TableBody>
                  {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                    <TableRow key={id}>
                      {years.map((year, id) => (
                        <TableCell key={id} value={year.value}>
                          <TableCellTrigger>{year.label}</TableCellTrigger>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </Context>
      </View>
    </>
  )
})

SimpleViews.displayName = "SimpleViews"

export const DatePicker = createComponentTree(CustomRoot, {
  Root,
  RootProvider,
  ClearTrigger,
  Content: CustomContent,
  Context,
  Control,
  Input,
  Label,
  MonthSelect,
  NextTrigger,
  Positioner,
  PresetTrigger,
  PrevTrigger,
  RangeText,
  Table,
  TableBody,
  TableCell,
  TableCellTrigger,
  TableHead,
  TableHeader,
  TableRow,
  Trigger,
  View,
  ViewControl,
  ViewTrigger,
  YearSelect,
  SimpleViews,
})

DatePicker.displayName = "DatePicker"
