export enum Env {
  Dev = "development",
  Stg = "staging",
  Prd = "production",
}

export const ENV: Env = (import.meta.env.VITE_ENV as Env) || Env.Dev

export const isDev = ENV === Env.Dev
export const isStg = ENV === Env.Stg
export const isPrd = ENV === Env.Prd
