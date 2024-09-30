import { Button, Field, Input } from "@/libs/atoms"
import { Controller } from "react-hook-form"
import { exampleForm } from "./example-form-ctx"

export default exampleForm.withProvider(function () {
  const form = exampleForm.useForm()

  const submit = form.handleSubmit(function ({ name, email }) {
    console.log({ name, email })
  })

  return (
    <div className="p-4">
      <form
        className="mx-auto max-w-xs space-y-2 rounded border border-line p-6"
        onSubmit={submit}
      >
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field invalid={fieldState.invalid}>
              <Field.Input asChild invalid={fieldState.invalid}>
                <Input {...field} placeholder="Name" />
              </Field.Input>
              <Field.ErrorText>{fieldState.error?.message}</Field.ErrorText>
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field invalid={fieldState.invalid}>
              <Field.Input asChild invalid={fieldState.invalid}>
                <Input {...field} placeholder="Email" />
              </Field.Input>
              <Field.ErrorText>{fieldState.error?.message}</Field.ErrorText>
            </Field>
          )}
        />

        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
})
