import { proxy, subscribe } from "valtio"

function getPersistedState(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) || "")
  } catch (err) {
    return null
  }
}

function updateState<T extends object>(key: string, state: T) {
  localStorage.setItem(key, JSON.stringify(state))
}

function getMergedState<T extends object>(persistedState: T | null, initial: T): T {
  if (!persistedState) {
    return initial
  }
  Object.setPrototypeOf(persistedState, Object.getPrototypeOf(initial))
  return persistedState
}

export function persistedProxy<T extends object>(key: string, initialObject: T): T {
  const mergedState = getMergedState(getPersistedState(key), initialObject)
  const state = proxy(mergedState)
  subscribe(state, () => {
    updateState(key, state)
  })
  return state
}
