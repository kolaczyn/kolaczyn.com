import { test, expect } from "@playwright/test";

test("visual on /en/home", async ({ page }) => {
  await page.goto("http://localhost:3001/en");

  await expect(page).toHaveScreenshot();
});

test("visual on /pl/projects", async ({ page }) => {
  await page.goto("http://localhost:3001/pl/projects");

  await expect(page).toHaveScreenshot();
});
