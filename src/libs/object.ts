function omit<T extends object>(obj: T, keys: Array<keyof T>): Omit<T, (typeof keys)[number]> {
  const result: Partial<T> = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keys.includes(key)) {
      result[key] = obj[key]
    }
  }
  return result as Omit<T, (typeof keys)[number]>
}

function pick<T extends object>(obj: T, keys: Array<keyof T>): Pick<T, (typeof keys)[number]> {
  const result: Partial<T> = {}
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key]
    }
  }
  return result as Pick<T, (typeof keys)[number]>
}

export { omit, pick }
