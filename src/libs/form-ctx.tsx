import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm, UseFormProps, UseFormReturn } from "react-hook-form"
import { z, ZodType } from "zod"

export function createFormCtx<Schema extends ZodType, DTO extends z.infer<Schema>>(
  schema: Schema,
  options: UseFormProps<DTO> = {},
) {
  const Ctx = React.createContext<UseFormReturn<DTO>>(undefined as any)

  const formOptions = {
    resolver: zodResolver(schema),
    ...options,
  }

  function withProvider<C extends React.ElementType>(Component: C) {
    return function (props: React.ComponentProps<C>) {
      const form = useForm<DTO>(formOptions)
      return (
        <Ctx.Provider value={form}>
          <Component {...props} />
        </Ctx.Provider>
      )
    }
  }

  return {
    withProvider,
    useForm: function () {
      return React.useContext(Ctx) || useForm<DTO>(formOptions)
    },
  }
}
