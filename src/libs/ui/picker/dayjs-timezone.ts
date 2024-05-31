import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import customParseFormat from "dayjs/plugin/customParseFormat"
import localeData from "dayjs/plugin/localeData"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import weekOfYear from "dayjs/plugin/weekOfYear"
import weekYear from "dayjs/plugin/weekYear"
import weekday from "dayjs/plugin/weekday"
import { GenerateConfig } from "rc-picker/lib/generate"
import generatedDayjs from "rc-picker/lib/generate/dayjs"

dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("utc")

type IlocaleMapObject = Record<string, string>
const localeMap: IlocaleMapObject = {
  // ar_EG:
  // az_AZ:
  // bg_BG:
  bn_BD: "bn-bd",
  by_BY: "be",
  // ca_ES:
  // cs_CZ:
  // da_DK:
  // de_DE:
  // el_GR:
  en_GB: "en-gb",
  en_US: "en",
  // es_ES:
  // et_EE:
  // fa_IR:
  // fi_FI:
  fr_BE: "fr", // todo: dayjs has no fr_BE locale, use fr at present
  fr_CA: "fr-ca",
  // fr_FR:
  // ga_IE:
  // gl_ES:
  // he_IL:
  // hi_IN:
  // hr_HR:
  // hu_HU:
  hy_AM: "hy-am",
  // id_ID:
  // is_IS:
  // it_IT:
  // ja_JP:
  // ka_GE:
  // kk_KZ:
  // km_KH:
  kmr_IQ: "ku",
  // kn_IN:
  // ko_KR:
  // ku_IQ: // previous ku in antd
  // lt_LT:
  // lv_LV:
  // mk_MK:
  // ml_IN:
  // mn_MN:
  // ms_MY:
  // nb_NO:
  // ne_NP:
  nl_BE: "nl-be",
  // nl_NL:
  // pl_PL:
  pt_BR: "pt-br",
  // pt_PT:
  // ro_RO:
  // ru_RU:
  // sk_SK:
  // sl_SI:
  // sr_RS:
  // sv_SE:
  // ta_IN:
  // th_TH:
  // tr_TR:
  // uk_UA:
  // ur_PK:
  // vi_VN:
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw",
}

const parseLocale = (locale: string) => {
  const mapLocale = localeMap[locale]
  return mapLocale || locale.split("_")[0]
}

const generateConfig: GenerateConfig<Dayjs> = {
  ...generatedDayjs,
  // get
  getNow: () => dayjs.tz(),
  getFixedDate: (string) => dayjs(string, ["YYYY-M-DD", "YYYY-MM-DD"]),
  getEndDate: (date) => date.endOf("month"),
  getWeekDay: (date) => {
    const clone = date.locale("en")
    return clone.weekday() + clone.localeData().firstDayOfWeek()
  },
  getYear: (date) => date.year(),
  getMonth: (date) => date.month(),
  getDate: (date) => date.date(),
  getHour: (date) => date.hour(),
  getMinute: (date) => date.minute(),
  getSecond: (date) => date.second(),
  getMillisecond: (date) => date.millisecond(),

  // set
  addYear: (date, diff) => date.add(diff, "year"),
  addMonth: (date, diff) => date.add(diff, "month"),
  addDate: (date, diff) => date.add(diff, "day"),
  setYear: (date, year) => date.year(year),
  setMonth: (date, month) => date.month(month),
  setDate: (date, num) => date.date(num),
  setHour: (date, hour) => date.hour(hour),
  setMinute: (date, minute) => date.minute(minute),
  setSecond: (date, second) => date.second(second),
  setMillisecond: (date, milliseconds) => date.millisecond(milliseconds),

  // Compare
  isAfter: (date1, date2) => date1.isAfter(date2),
  isValidate: (date) => date.isValid(),

  locale: {
    ...generatedDayjs.locale,
    getWeekFirstDay: (locale) => dayjs.tz().locale(parseLocale(locale)).localeData().firstDayOfWeek(),
    getWeekFirstDate: (locale, date) => date.locale(parseLocale(locale)).weekday(0),
    getWeek: (locale, date) => date.locale(parseLocale(locale)).week(),
    getShortWeekDays: (locale) => dayjs.tz().locale(parseLocale(locale)).localeData().weekdaysMin(),
    getShortMonths: (locale) => dayjs.tz().locale(parseLocale(locale)).localeData().monthsShort(),
    format: (locale, date, format) => date.locale(parseLocale(locale)).format(format),
  },
}

export default generateConfig
