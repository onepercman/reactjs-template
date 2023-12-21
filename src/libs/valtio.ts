import { proxy, subscribe } from "valtio"

function getPersist(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) || "")
  } catch (err) {
    return {}
  }
}

function setPersist<T extends object>(key: string, state: T) {
  localStorage.setItem(key, JSON.stringify(state))
}

function getMergedState<T extends object>(initialState: T, persistedState: T | null): T {
  const states = { ...initialState, ...persistedState }
  Object.setPrototypeOf(states, Object.getPrototypeOf(initialState))
  return states
}

function proxyWithPersist<T extends object>(initialObject: T, options: { key: string }): T {
  const { key } = options
  const mergedState = getMergedState(initialObject, getPersist(key))
  setPersist(key, mergedState)
  const state = proxy(mergedState)
  subscribe(state, () => {
    setPersist(key, state)
  })
  return state
}

export { proxyWithPersist }
