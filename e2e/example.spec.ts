import { expect, test } from "@playwright/test"

test("homepage has title", async ({ page }) => {
  await page.goto("/")

  // Update this to match your actual site title
  await expect(page).toHaveTitle(/Uganda Open Data Platform/)
})

test("navigation works", async ({ page }) => {
  await page.goto("/")

  // Update these selectors and assertions to match your actual UI
  await expect(page.locator("body")).toBeVisible()

  // Example: Test navigation if you have a navigation menu
  // await page.getByRole("link", { name: "Data" }).click();
  // await expect(page).toHaveURL("/data");
})
