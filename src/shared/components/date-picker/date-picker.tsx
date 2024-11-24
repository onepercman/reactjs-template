import { DatePicker, DatePickerRootProps, Portal } from "@ark-ui/react"
import React, { Fragment } from "react"
import {
  LuArrowRightCircle,
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { Button } from "../button"
import { Input as AtomInput, InputProps } from "../input"
import { datePicker } from "./variants"

const { withRoot, withSlot } = createComponentFactory(datePicker)

const Root = withRoot(DatePicker.Root)
const RootProvider = withRoot(DatePicker.RootProvider)
const ClearTrigger = withSlot(DatePicker.ClearTrigger)
const Content = withSlot(DatePicker.Content, "content")
const Context = withSlot(DatePicker.Context)
const Control = withSlot(DatePicker.Control, "control")
const Input = withSlot(DatePicker.Input)
const Label = withSlot(DatePicker.Label)
const MonthSelect = withSlot(DatePicker.MonthSelect)
const NextTrigger = withSlot(DatePicker.NextTrigger)
const Positioner = withSlot(DatePicker.Positioner)
const PresetTrigger = withSlot(DatePicker.PresetTrigger)
const PrevTrigger = withSlot(DatePicker.PrevTrigger)
const RangeText = withSlot(DatePicker.RangeText)
const Table = withSlot(DatePicker.Table, "table")
const TableBody = withSlot(DatePicker.TableBody)
const TableCell = withSlot(DatePicker.TableCell)
const TableCellTrigger = withSlot(
  DatePicker.TableCellTrigger,
  "tableCellTrigger",
)
const TableHead = withSlot(DatePicker.TableHead)
const TableHeader = withSlot(DatePicker.TableHeader, "tableHeader")
const TableRow = withSlot(DatePicker.TableRow)
const Trigger = withSlot(DatePicker.Trigger)
const View = withSlot(DatePicker.View)
const ViewControl = withSlot(DatePicker.ViewControl, "viewControl")
const ViewTrigger = withSlot(DatePicker.ViewTrigger)
const YearSelect = withSlot(DatePicker.YearSelect)

export interface DatePickerCompactProps
  extends DatePickerRootProps,
    ComposedTVProps<typeof datePicker> {
  inputProps?: InputProps
}

export interface DatePicker extends ComponentMetadata {
  (props: DatePickerCompactProps): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: DatePickerCompactProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLInputElement, DatePickerCompactProps>(
    render,
  ) as unknown as DatePicker
}

export const CustomRoot = _bootstrap(function (
  { inputProps = {}, positioning, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      asChild
      positioning={{ placement: "bottom-end", ...positioning }}
      {...props}
    >
      <Fragment>
        {props.selectionMode === "range" ? (
          <Control>
            <Input asChild index={0}>
              <AtomInput {...inputProps} />
            </Input>
            <LuArrowRightCircle className="text-secondary" />
            <Input asChild index={1}>
              <AtomInput {...inputProps} />
            </Input>
            <Trigger asChild>
              <Button
                shape="square"
                leftIcon={<LuCalendar className="text-secondary" />}
                onClick={e => e.stopPropagation()}
              />
            </Trigger>
          </Control>
        ) : (
          <Control>
            <Input asChild>
              <AtomInput
                suffix={
                  <Trigger onClick={e => e.stopPropagation()}>
                    <LuCalendar className="text-secondary" />
                  </Trigger>
                }
                {...inputProps}
              />
            </Input>
          </Control>
        )}

        <Portal>
          <Positioner>
            <Content>
              {/* VIEW DAY */}
              <View view="day">
                <Context>
                  {datePicker => (
                    <>
                      <ViewControl>
                        <PrevTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronLeft />} />
                        </PrevTrigger>
                        <ViewTrigger asChild>
                          <Button size="xs">
                            <RangeText />
                          </Button>
                        </ViewTrigger>
                        <NextTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronRight />} />
                        </NextTrigger>
                      </ViewControl>
                      <Table>
                        <TableHead>
                          <TableRow>
                            {datePicker.weekDays.map((weekDay, id) => (
                              <TableHeader key={id}>
                                {weekDay.narrow}
                              </TableHeader>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {datePicker.weeks.map((week, id) => (
                            <TableRow key={id}>
                              {week.map((day, id) => (
                                <TableCell key={id} value={day}>
                                  <TableCellTrigger asChild>
                                    <Button size="xs" variant="ghost">
                                      {day.day}
                                    </Button>
                                  </TableCellTrigger>
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
                          <Button size="xs" leftIcon={<LuChevronLeft />} />
                        </PrevTrigger>
                        <ViewTrigger asChild>
                          <Button size="xs">
                            <RangeText />
                          </Button>
                        </ViewTrigger>
                        <NextTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronRight />} />
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
                                    <TableCellTrigger asChild>
                                      <Button size="xs" variant="ghost">
                                        {month.label}
                                      </Button>
                                    </TableCellTrigger>
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
                          <Button size="xs" leftIcon={<LuChevronLeft />} />
                        </PrevTrigger>
                        <ViewTrigger asChild>
                          <Button size="xs">
                            <RangeText />
                          </Button>
                        </ViewTrigger>
                        <NextTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronRight />} />
                        </NextTrigger>
                      </ViewControl>
                      <Table>
                        <TableBody>
                          {datePicker
                            .getYearsGrid({ columns: 4 })
                            .map((years, id) => (
                              <TableRow key={id}>
                                {years.map((year, id) => (
                                  <TableCell key={id} value={year.value}>
                                    <TableCellTrigger asChild>
                                      <Button size="xs" variant="ghost">
                                        {year.label}
                                      </Button>
                                    </TableCellTrigger>
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
            </Content>
          </Positioner>
        </Portal>
      </Fragment>
    </Root>
  )
})

export const Component = createComponentTree(CustomRoot, {
  Root,
  RootProvider,
  ClearTrigger,
  Content,
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
})

Component.displayName = "DatePicker"
