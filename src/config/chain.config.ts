import { fantom, goerli } from "viem/chains"
import { ENV, Env } from "./env.config"

const ChainConfig = <const>{
  [Env.dev]: goerli,
  [Env.stg]: fantom,
  [Env.prd]: fantom,
}

export const defaultChain = ChainConfig[ENV]
