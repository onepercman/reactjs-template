import {
  AutocompleteItem,
  AutocompleteSection,
  Autocomplete as BaseAutocomplete,
  extendVariants,
} from "@heroui/react"

export const Autocomplete = extendVariants(BaseAutocomplete, {})

export { AutocompleteItem, AutocompleteSection }
