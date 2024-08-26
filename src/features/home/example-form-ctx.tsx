import { createFormCtx } from "@/libs/form-ctx"
import { z } from "zod"

export const exampleForm = createFormCtx(
  z
    .object({
      name: z.string().optional(),
      email: z.string().email().optional(),
    })
    .refine(
      function ({ name, email }) {
        return !name || email
      },
      {
        message: "Email is required if name is entered",
        path: ["email"],
      },
    ),
  {
    mode: "all",
  },
)
