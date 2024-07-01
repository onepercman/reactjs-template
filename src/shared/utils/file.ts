export function browseTextFile<Multiple extends boolean = false>(options?: {
  accept?: string
  multiple?: Multiple
}): Promise<Multiple extends true ? FileList : File> {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input")
    input.type = "file"
    if (options?.accept) {
      input.accept = options.accept
    }
    if (options?.multiple) {
      input.multiple = options.multiple
    }
    function handler(event: Event) {
      const ev = event as any as React.ChangeEvent<HTMLInputElement>
      const files = ev.target.files
      if (files?.length) {
        resolve(options?.multiple ? (files as any) : files[0])
      } else {
        reject(new Error("No file selected"))
      }
    }
    input.addEventListener("change", handler)
    input.click()
  })
}
