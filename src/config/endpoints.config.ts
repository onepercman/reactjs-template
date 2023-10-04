import { ENV, Env } from "./env.config"

const API_URLS = <const>{
  [Env.dev]: "",
  [Env.stg]: "",
  [Env.prd]: "",
}

export const API_URL = API_URLS[ENV]
