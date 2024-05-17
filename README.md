## Implement list

### Dev Deps

- postcss
- tailwindcss
- @headlessui-float/react
- @headlessui/react
- @tailwindcss/forms
- tailwind-schemes
- prettier-plugin-tailwindcss
- tailwind-merge
- tailwind-scrollbar
- tailwindcss-animate

## Usage

### Custom components

- Legacy:
  - .tailwind/legacy/button
  - .tailwind/legacy/input
- Primitives:
  - @/libs/ui/

### Store

- Step 1: Create a store in "@/stores" using "createStore" function
- Step 2: Use "useStore" hook instead of "useSnapshot" to have typesafe

```ts
import { createStore } from "@/libs/valtio"

class Store {
  property1: "value1"
  property2: "value2"

  action() {
    this.property1 = "new value"
  }
}

export default createStore(new Store())
```

- With persist:

```ts
export default createStore(new Store(), {
  key: storageKeys.store1,
  include: ["property1"],
})
```

Example

```tsx
const { property1 } = useStore(store)
```
