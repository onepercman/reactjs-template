import { ENV, Env } from "./env.config"

const HOSTS = <const>{
  [Env.dev]: "",
  [Env.stg]: "",
  [Env.prd]: "",
}

export const HOST = HOSTS[ENV]
