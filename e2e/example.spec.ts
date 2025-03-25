import { expect, test } from "@playwright/test"

test("homepage has correct title", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/ReactJS Template/)
})

test("navigation works correctly", async ({ page }) => {
  await page.goto("/")

  // Example: Check if a link exists and is clickable
  const link = page.getByRole("link", { name: /about/i })
  await expect(link).toBeVisible()
  await link.click()

  // Example: Check if we're on the about page
  await expect(page).toHaveURL(/.*about/)
})
