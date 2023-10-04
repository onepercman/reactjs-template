import { ENV, Env } from "./env.config"

export const gaConfig = <const>{
  [Env.dev]: "",
  [Env.stg]: "",
  [Env.prd]: "",
}

export const GA_ID = gaConfig[ENV]
