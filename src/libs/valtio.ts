import { proxy, subscribe } from "valtio"

const defaultStorage = localStorage
interface ProxyWithPersistOptions {
  key: string
  storage?: Storage
}

function getPersist(key: string, storage: Storage) {
  try {
    return JSON.parse(storage.getItem(key) || "")
  } catch (err) {
    return {}
  }
}

function setPersist<T extends object>(key: string, state: T, storage: Storage) {
  storage.setItem(key, JSON.stringify(state))
}

function getMergedState<T extends object>(initialState: T, persistedState: T | null): T {
  const states = { ...initialState, ...persistedState }
  Object.setPrototypeOf(states, Object.getPrototypeOf(initialState))
  return states
}

function proxyWithPersist<T extends object>(
  initialObject: T,
  { key, storage = defaultStorage }: ProxyWithPersistOptions,
): T {
  const mergedState = getMergedState(initialObject, getPersist(key, storage))
  setPersist(key, mergedState, storage)
  const state = proxy(mergedState)
  subscribe(state, () => {
    setPersist(key, state, storage)
  })
  return state
}

export { proxyWithPersist }
export type { ProxyWithPersistOptions }
