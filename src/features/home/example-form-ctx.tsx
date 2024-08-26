import { createFormCtx } from "@/libs/form-ctx"
import { z } from "zod"

export const exampleForm = createFormCtx(
  z.object({
    text: z.string().min(1, "This field is required").email(),
  }),
  {
    mode: "all",
    defaultValues: {
      text: "default",
    },
  },
)
