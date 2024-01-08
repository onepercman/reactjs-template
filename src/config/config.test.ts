import { defaultChain } from "@/config/chain.config"
import { API_URL } from "@/config/endpoints.config"
import { ENV } from "@/config/env.config"
import { HOST } from "@/config/host.config"
import { expect, test } from "vitest"

test("config", () => {
  expect(defaultChain).toBeTruthy()
  expect(ENV).toBeTruthy()
  expect(API_URL).toBeTruthy()
  expect(HOST).toBeTruthy()
})
