export enum Env {
  dev = "development",
  stg = "staging",
  prd = "production",
}

export const ENV: Env = (import.meta.env.VITE_ENV as Env) || Env.dev
