import { defaultChain } from "@/config/chain.config"
import { API_URL } from "@/config/endpoints.config"
import { expect, test } from "vitest"
import { MODE } from "./mode.config"

test("config", () => {
  expect(MODE).toBeTruthy()
  expect(defaultChain).toBeTruthy()
  expect(API_URL).toBeTruthy()
})
