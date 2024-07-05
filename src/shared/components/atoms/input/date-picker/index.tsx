import * as Ark from "@ark-ui/react"
import React, { Fragment } from "react"
import { LuCalendar, LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { VariantProps } from "tailwind-variants"
import { Button } from "../../button"
import { ComposedTVProps, ForwardedRefComponent } from "../../types"
import { datePicker, input } from "../../variants"
import { Input, InputFieldProps } from "../input"
export interface DatePickerProps
  extends Ark.DatePickerRootProps,
    Omit<InputFieldProps, "prefix">,
    VariantProps<typeof input>,
    ComposedTVProps<typeof datePicker> {}

export interface DatePicker extends ForwardedRefComponent {
  (props: DatePickerProps): React.ReactElement | null
}

function _constructor(
  render: (
    props: DatePickerProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLInputElement, DatePickerProps>(
    render,
  ) as unknown as DatePicker
}

export const DatePicker = _constructor(function (
  { classNames, ...props },
  ref,
) {
  const styles = datePicker()

  return (
    <Ark.DatePicker.Root asChild {...props}>
      <Fragment>
        <Ark.DatePicker.Control asChild>
          <Ark.DatePicker.Input asChild>
            <Input
              ref={ref}
              suffix={
                <Ark.DatePicker.Trigger
                  onClick={function (e) {
                    e.stopPropagation()
                  }}
                >
                  <LuCalendar />
                </Ark.DatePicker.Trigger>
              }
              {...props}
            />
          </Ark.DatePicker.Input>
        </Ark.DatePicker.Control>

        <Ark.Portal>
          <Ark.DatePicker.Positioner>
            <Ark.DatePicker.Content
              className={styles.base({ class: classNames?.base })}
            >
              <Ark.DatePicker.View view="day">
                <Ark.DatePicker.Context>
                  {(datePicker) => (
                    <>
                      <Ark.DatePicker.ViewControl
                        className={styles.viewControl({
                          class: classNames?.viewControl,
                        })}
                      >
                        <Ark.DatePicker.PrevTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronLeft />} />
                        </Ark.DatePicker.PrevTrigger>
                        <Ark.DatePicker.ViewTrigger>
                          <Button size="xs">
                            <Ark.DatePicker.RangeText />
                          </Button>
                        </Ark.DatePicker.ViewTrigger>
                        <Ark.DatePicker.NextTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronRight />} />
                        </Ark.DatePicker.NextTrigger>
                      </Ark.DatePicker.ViewControl>
                      <Ark.DatePicker.Table>
                        <Ark.DatePicker.TableHead>
                          <Ark.DatePicker.TableRow>
                            {datePicker.weekDays.map((weekDay, id) => (
                              <Ark.DatePicker.TableHeader
                                key={id}
                                className={styles.header({
                                  class: classNames?.header,
                                })}
                              >
                                {weekDay.short}
                              </Ark.DatePicker.TableHeader>
                            ))}
                          </Ark.DatePicker.TableRow>
                        </Ark.DatePicker.TableHead>
                        <Ark.DatePicker.TableBody>
                          {datePicker.weeks.map((week, id) => (
                            <Ark.DatePicker.TableRow key={id}>
                              {week.map((day, id) => (
                                <Ark.DatePicker.TableCell key={id} value={day}>
                                  <Ark.DatePicker.TableCellTrigger asChild>
                                    <Button
                                      size="xs"
                                      variant="ghost"
                                      className={styles.cell({
                                        class: classNames?.cell,
                                      })}
                                    >
                                      {day.day}
                                    </Button>
                                  </Ark.DatePicker.TableCellTrigger>
                                </Ark.DatePicker.TableCell>
                              ))}
                            </Ark.DatePicker.TableRow>
                          ))}
                        </Ark.DatePicker.TableBody>
                      </Ark.DatePicker.Table>
                    </>
                  )}
                </Ark.DatePicker.Context>
              </Ark.DatePicker.View>
              <Ark.DatePicker.View view="month">
                <Ark.DatePicker.Context>
                  {(datePicker) => (
                    <>
                      <Ark.DatePicker.ViewControl
                        className={styles.viewControl({
                          class: classNames?.viewControl,
                        })}
                      >
                        <Ark.DatePicker.PrevTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronLeft />} />
                        </Ark.DatePicker.PrevTrigger>
                        <Ark.DatePicker.ViewTrigger>
                          <Button size="xs">
                            <Ark.DatePicker.RangeText />
                          </Button>
                        </Ark.DatePicker.ViewTrigger>
                        <Ark.DatePicker.NextTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronRight />} />
                        </Ark.DatePicker.NextTrigger>
                      </Ark.DatePicker.ViewControl>
                      <Ark.DatePicker.Table>
                        <Ark.DatePicker.TableBody>
                          {datePicker
                            .getMonthsGrid({ columns: 4, format: "short" })
                            .map((months, id) => (
                              <Ark.DatePicker.TableRow key={id}>
                                {months.map((month, id) => (
                                  <Ark.DatePicker.TableCell
                                    key={id}
                                    value={month.value}
                                  >
                                    <Ark.DatePicker.TableCellTrigger asChild>
                                      <Button
                                        size="xs"
                                        variant="ghost"
                                        className={styles.cell({
                                          class: classNames?.cell,
                                        })}
                                      >
                                        {month.label}
                                      </Button>
                                    </Ark.DatePicker.TableCellTrigger>
                                  </Ark.DatePicker.TableCell>
                                ))}
                              </Ark.DatePicker.TableRow>
                            ))}
                        </Ark.DatePicker.TableBody>
                      </Ark.DatePicker.Table>
                    </>
                  )}
                </Ark.DatePicker.Context>
              </Ark.DatePicker.View>
              <Ark.DatePicker.View view="year">
                <Ark.DatePicker.Context>
                  {(datePicker) => (
                    <>
                      <Ark.DatePicker.ViewControl
                        className={styles.viewControl({
                          class: classNames?.viewControl,
                        })}
                      >
                        <Ark.DatePicker.PrevTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronLeft />} />
                        </Ark.DatePicker.PrevTrigger>
                        <Ark.DatePicker.ViewTrigger>
                          <Button size="xs">
                            <Ark.DatePicker.RangeText />
                          </Button>
                        </Ark.DatePicker.ViewTrigger>
                        <Ark.DatePicker.NextTrigger asChild>
                          <Button size="xs" leftIcon={<LuChevronRight />} />
                        </Ark.DatePicker.NextTrigger>
                      </Ark.DatePicker.ViewControl>
                      <Ark.DatePicker.Table>
                        <Ark.DatePicker.TableBody>
                          {datePicker
                            .getYearsGrid({ columns: 4 })
                            .map((years, id) => (
                              <Ark.DatePicker.TableRow key={id}>
                                {years.map((year, id) => (
                                  <Ark.DatePicker.TableCell
                                    key={id}
                                    value={year.value}
                                  >
                                    <Ark.DatePicker.TableCellTrigger asChild>
                                      <Button
                                        size="xs"
                                        variant="ghost"
                                        className={styles.cell({
                                          class: classNames?.cell,
                                        })}
                                      >
                                        {year.label}
                                      </Button>
                                    </Ark.DatePicker.TableCellTrigger>
                                  </Ark.DatePicker.TableCell>
                                ))}
                              </Ark.DatePicker.TableRow>
                            ))}
                        </Ark.DatePicker.TableBody>
                      </Ark.DatePicker.Table>
                    </>
                  )}
                </Ark.DatePicker.Context>
              </Ark.DatePicker.View>
            </Ark.DatePicker.Content>
          </Ark.DatePicker.Positioner>
        </Ark.Portal>
      </Fragment>
    </Ark.DatePicker.Root>
  )
})

DatePicker.displayName = "DatePicker"
