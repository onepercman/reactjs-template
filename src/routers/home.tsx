import { Button } from "@/libs/ui/button"
import { Container } from "@/libs/ui/container"
import { Input } from "@/libs/ui/input"
import { Select } from "@/libs/ui/select"
import { HiArrowRightCircle } from "react-icons/hi2"

const buttonColors = ["default", "primary", "success", "error", "warning"]
const buttonVariants = ["default", "ghost", "outlined"]
const buttonSizes = ["xs", "sm", "md", "lg"]

const inputVariants = ["filled", "outlined"]
const inputSizes = ["xs", "sm", "md", "lg"]

export default function Home() {
  return (
    <Container className="space-y-6 pb-80">
      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <HiArrowRightCircle /> BUTTON
      </div>

      <div className="flex flex-col gap-4">
        {buttonVariants.map((variant) => (
          <div className="flex gap-4">
            {buttonColors.map((color) => (
              <div className="flex flex-col gap-2">
                {buttonSizes.map((size) => (
                  <Button size={size as any} variant={variant as any} color={color as any}>
                    Button
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <HiArrowRightCircle /> INPUT
      </div>

      <div className="flex gap-4">
        {inputVariants.map((variant) => (
          <div className="flex flex-col gap-4">
            {inputSizes.map((size) => (
              <Input
                size={size as any}
                variant={variant as any}
                label="Label"
                invalid={size === "sm"}
                invalidMessage="Invalid value"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <HiArrowRightCircle /> TEXTAREA
      </div>

      <div className="flex gap-4">
        <Input.Textarea variant="filled" autoSize autoSizeOptions={{ maxRows: 5 }} label="Label" />
        <Input.Textarea variant="outlined" autoSize autoSizeOptions={{ maxRows: 5 }} label="Label" />
      </div>

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <HiArrowRightCircle /> Select
      </div>

      <Select
        variant="default"
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
            children: [],
          },
        ]}
        allowClear
        label="Label"
        placeholder="Select option"
        invalidMessage="Invalid field"
      />
      <Select
        variant="outlined"
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
          {
            label: "Option 4",
            value: 4,
          },
          {
            label: "Option 5",
            value: 5,
          },
          {
            label: "Group 1",
            value: 6,
            children: [
              {
                label: "Item 1.1",
                value: 11,
              },
              {
                label: "Item 1.2",
                value: 12,
              },
              {
                label: "Group 1.1",
                value: 13,
                children: [
                  {
                    label: "HEHE",
                    value: 99,
                  },
                ],
              },
            ],
          },
        ]}
        allowClear
        label="Label"
        placeholder="Select option"
        className="min-w-80"
      />
    </Container>
  )
}
