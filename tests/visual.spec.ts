import { test, expect } from "@playwright/test";

test("visual on /en/home", async ({ page }) => {
  await page.goto("/en/");

  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("visual on /pl/projects", async ({ page }) => {
  await page.goto("/pl/projects/");

  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});
