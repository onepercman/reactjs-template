import { Accordion } from "@/libs/ui/accordion"
import { Button } from "@/libs/ui/button"
import { Combobox } from "@/libs/ui/combobox"
import { Container } from "@/libs/ui/container"
import { Dialog } from "@/libs/ui/dialog"
import { Input } from "@/libs/ui/input"
import { Menu } from "@/libs/ui/menu"
import { RadioGroup } from "@/libs/ui/radio-group"
import { Select } from "@/libs/ui/select"
import { toaster } from "@/libs/ui/toast"
import { LuArrowRightCircle } from "react-icons/lu"

const buttonColors = ["default", "primary", "success", "error", "warning"]
const buttonVariants = ["default", "ghost", "outlined"]
const buttonSizes = ["xs", "sm", "md", "lg"]

const inputVariants = ["filled", "outlined"]
const inputSizes = ["xs", "sm", "md", "lg"]

export default function Home() {
  return (
    <Container className="space-y-6 pb-80">
      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> BUTTON
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
        <LuArrowRightCircle /> INPUT
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

      <div className="flex gap-4">
        <Input.Checkbox size="xs">Checkbox</Input.Checkbox>
        <Input.Checkbox size="sm">Checkbox</Input.Checkbox>
        <Input.Checkbox size="md">Checkbox</Input.Checkbox>
        <Input.Checkbox size="lg">Checkbox</Input.Checkbox>
      </div>

      <RadioGroup
        size="md"
        label="Label"
        options={[
          {
            label: "Option 1",
            value: "1",
          },
          {
            label: "Option 2",
            value: "2",
          },
        ]}
      />

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> TEXTAREA
      </div>

      <div className="flex gap-4">
        <Input.Textarea variant="filled" autoSize autoSizeOptions={{ maxRows: 5 }} label="Label" />
        <Input.Textarea variant="outlined" autoSize autoSizeOptions={{ maxRows: 5 }} label="Label" />
      </div>

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> SELECT
      </div>

      <Select
        variant="default"
        options={selectOptions}
        allowClear
        label="Label"
        placeholder="Select option"
        invalidMessage="Invalid field"
      />
      <Select variant="outlined" options={selectOptions} allowClear label="Label" placeholder="Select option" />

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> COMBOBOX
      </div>

      <Combobox
        variant="outlined"
        options={selectOptions}
        allowClear
        label="Label"
        placeholder="Select option"
        invalidMessage="Invalid field"
      />

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> MENU
      </div>

      <div>
        <Menu
          options={[
            {
              label: "Option 1",
              value: "1",
            },
            {
              isSeparator: true,
            },
            {
              label: "Option 2",
              value: "2",
            },
          ]}
        >
          <Button>Please select an option</Button>
        </Menu>
      </div>

      <Accordion
        multiple
        items={[
          {
            trigger: { children: <div>Trigger 1</div> },
            content: {
              children: (
                <div className="p-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ),
            },
            value: "1",
          },
          {
            trigger: { children: <div>Trigger 2</div> },
            content: {
              children: (
                <div className="p-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ),
            },
            value: "2",
          },
        ]}
      />

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> MENU
      </div>

      <div>
        <Dialog trigger={<Button>Dialog</Button>}>Content</Dialog>
      </div>

      <div className="inline-flex items-center gap-2 text-lg font-medium">
        <LuArrowRightCircle /> MENU
      </div>

      <div>
        <Button
          onClick={() =>
            toaster.create({
              type: ["info", "success", "error"][Math.floor(Math.random() * 3)],
              title: "Toast " + new Date().getSeconds(),
              description: "Description",
            })
          }
        >
          Toast
        </Button>
      </div>
    </Container>
  )
}

const selectOptions = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
  {
    label: "Option 3",
    value: "3",
  },
  {
    label: "Option 4",
    value: "4",
  },
  {
    label: "Option 5",
    value: "5",
  },
  {
    label: "Group 1",
    value: "6",
    items: [
      {
        label: "Item 1.1",
        value: "11",
      },
      {
        label: "Item 1.2",
        value: "12",
      },
      {
        label: "Group 1.1",
        value: "13",
        children: [
          {
            label: "HEHE",
            value: "99",
          },
        ],
      },
    ],
  },
  {
    label: "Nested",
    value: "nested",
    children: [
      {
        label: "Item 1.1",
        value: "nest 1",
      },
      {
        label: "Item 1.2",
        value: "nest 2",
      },
      {
        label: "Group 1.1",
        value: "nest 3",
        children: [
          {
            label: "HEHE",
            value: "nest 3.3",
          },
        ],
      },
    ],
  },
]
