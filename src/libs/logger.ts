import { _DEV_ } from "@/shared/config/mode.config"

export class Logger {
  static info(statement: string, message: any, ...optionalParams: any[]) {
    if (!_DEV_) return
    const options = [
      "font-size: 1rem; font-weight: bold; color: #71f871",
      ...optionalParams,
    ]
    if (options.length <= 1) {
      options.push("color: white; font-weight: semi-bold")
    }
    return console.log(`%c[${statement}]%c\n\n${message}\n\n`, ...options)
  }

  static error(statement: string, message: any, ...optionalParams: any[]) {
    if (!_DEV_) return
    const options = [
      "font-size: 1rem; font-weight: bold; color: #f87171",
      ...optionalParams,
    ]
    if (options.length <= 1) {
      options.push("color: white; font-weight: semi-bold")
    }
    return console.log(`%c[${statement}]%c\n\n${message}\n\n`, ...options)
  }

  static warning(statement: string, message: any, ...optionalParams: any[]) {
    if (!_DEV_) return
    const options = [
      "font-size: 1rem; font-weight: bold; color: #f3c50f",
      ...optionalParams,
    ]
    if (options.length <= 1) {
      options.push("color: white; font-weight: semi-bold")
    }
    return console.warn(`%c[${statement}]%c\n\n${message}\n\n`, ...options)
  }
}
