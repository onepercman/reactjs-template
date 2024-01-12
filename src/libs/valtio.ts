import { proxy, subscribe, useSnapshot } from "valtio"
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

type UseStoreReturnType<T extends object> = Pick<
  T,
  { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T]
>

function getPersist(key: string, storage: Storage) {
  try {
    return JSON.parse(storage.getItem(key) || "")
  } catch (err) {
    console.log(`🔴 get persist error [${key}]`, err)
    return {}
  }
}

function setPersist<T extends object>(key: string, state: T, storage: Storage, { exclude, include }: WithInOrEx<T>) {
  try {
    const data = include ? pick(state, include) : exclude ? omit(state, exclude) : state
    storage.setItem(key, JSON.stringify(data))
  } catch (err) {
    console.log(`🔴 set persist error [${key}]`, err)
  }
}

function getMergedState<T extends object>(initialState: T, persistedState: T): T {
  const states = { ...initialState, ...persistedState }
  Object.setPrototypeOf(states, Object.getPrototypeOf(initialState))
  return states
}

function createStore<T extends object>(initialObject: T, persistOptions?: ProxyWithPersistOptions<T>): T {
  if (!persistOptions) return proxy(initialObject)
  const { key, storage = defaultStorage, exclude, include, onInit } = persistOptions
  const mergedState = getMergedState(initialObject, getPersist(key, storage))
  setPersist(key, mergedState, storage, { exclude, include })
  onInit && onInit(mergedState)
  const state = proxy(mergedState)
  subscribe(state, () => {
    setPersist(key, state, storage, { exclude, include })
  })
  return state
}

function useStore<T extends object>(
  store: T,
  options?: {
    sync?: boolean
  },
): UseStoreReturnType<T> {
  return useSnapshot(store, options) as UseStoreReturnType<T>
}

export { createStore, useStore }
