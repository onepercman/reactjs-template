import { Field, Input } from "@/libs/atoms"
import { Controller } from "react-hook-form"
import { exampleForm } from "./example-form-ctx"

export default exampleForm.withProvider(function () {
  const form = exampleForm.useForm()

  return (
    <div className="p-4">
      <form>
        <Controller
          control={form.control}
          name="text"
          render={({ field, fieldState }) => (
            <Field invalid={fieldState.invalid}>
              <Field.Input asChild invalid={fieldState.invalid}>
                <Input {...field} />
              </Field.Input>
              <Field.ErrorText>{fieldState.error?.message}</Field.ErrorText>
            </Field>
          )}
        />
      </form>
    </div>
  )
})
