import { proxy, subscribe } from "valtio"
import { omit, pick } from "./object"

const defaultStorage = localStorage

interface WithInOrEx<T extends object> {
  include?: KeyList<T>
  exclude?: KeyList<T>
}

type KeyList<T extends object> = Array<keyof T>
interface ProxyWithPersistOptions<T extends object> extends WithInOrEx<T> {
  key: string
  storage?: Storage
  onInit?(state: T): void
}

function getPersist(key: string, storage: Storage) {
  try {
    return JSON.parse(storage.getItem(key) || "")
  } catch (err) {
    return {}
  }
}

function setPersist<T extends object>(key: string, state: T, storage: Storage, { exclude, include }: WithInOrEx<T>) {
  try {
    const data = include ? pick(state, include) : exclude ? omit(state, exclude) : state
    storage.setItem(key, JSON.stringify(data))
  } catch (err) {
    console.log("🐞 Persist error key: ", key)
  }
}

function getMergedState<T extends object>(initialState: T, persistedState: T): T {
  const states = { ...initialState, ...persistedState }
  Object.setPrototypeOf(states, Object.getPrototypeOf(initialState))
  return states
}

function proxyWithPersist<T extends object>(
  initialObject: T,
  { key, storage = defaultStorage, exclude, include, onInit }: ProxyWithPersistOptions<T>,
): T {
  const mergedState = getMergedState(initialObject, getPersist(key, storage))
  setPersist(key, mergedState, storage, { exclude, include })
  onInit && onInit(mergedState)
  const state = proxy(mergedState)
  subscribe(state, () => {
    setPersist(key, state, storage, { exclude, include })
  })
  return state
}

function Store<T extends { new (...args: any[]): any }>() {
  return function (Class: T) {
    return proxy(new Class())
  }
}

export { Store, proxyWithPersist }
export type { ProxyWithPersistOptions }
