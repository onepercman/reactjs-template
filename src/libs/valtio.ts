import { proxy, subscribe, useSnapshot } from "valtio"
import { omit, pick } from "./object"

type StorageType = "localStorage" | "sessionStorage"

interface WithInOrEx<T extends object> {
  include?: KeyList<T>
  exclude?: KeyList<T>
}

type KeyList<T extends object> = Array<keyof T>
interface ProxyWithPersistOptions<T extends object> extends WithInOrEx<T> {
  key: string
  storage?: StorageType
  onInit?(state: T): void
}

type UseStoreReturnType<T extends object> = Pick<
  T,
  { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T]
>

function getStorage(type: StorageType): Storage | undefined {
  if (typeof window !== "undefined") {
    return window[type]
  }
  return undefined
}

function getPersistedData(key: string, storageType: StorageType) {
  try {
    const storage = getStorage(storageType)
    if (!storage) return {}
    return JSON.parse(storage.getItem(key) || "")
  } catch (err) {
    return {}
  }
}

function persist<T extends object>(
  key: string,
  state: T,
  storageType: StorageType,
  { exclude, include }: WithInOrEx<T>,
) {
  const storage = getStorage(storageType)
  if (!storage) throw new Error("Persist failed, Client not found")
  const data = include ? pick(state, include) : exclude ? omit(state, exclude) : state
  storage.setItem(key, JSON.stringify(data))
}

function getMergedState<T extends object>(initialState: T, persistedState: T): T {
  const states = { ...initialState, ...persistedState }
  Object.setPrototypeOf(states, Object.getPrototypeOf(initialState))
  return states
}

function createPersistStore<T extends object>(initialObject: T, persistOptions: ProxyWithPersistOptions<T>): T {
  const { key, storage = "localStorage", exclude, include, onInit } = persistOptions
  const mergedState = getMergedState(initialObject, getPersistedData(key, storage))
  persist(key, mergedState, storage, { exclude, include })
  onInit && onInit(mergedState)
  const state = proxy(mergedState)
  subscribe(state, () => {
    persist(key, state, storage, { exclude, include })
  })
  return state
}

function createStore<T extends object>(initialObject: T, persistOptions?: ProxyWithPersistOptions<T>): T {
  if (!persistOptions) return proxy(initialObject)
  return createPersistStore(initialObject, persistOptions)
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
