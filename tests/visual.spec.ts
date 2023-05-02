import { test, expect } from "@playwright/test";

const URL = "http://localhost:3002";

test("visual on /en/home", async ({ page }) => {
  await page.goto(`${URL}/en/`);

  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("visual on /pl/projects", async ({ page }) => {
  await page.goto(`${URL}/pl/projects/`);

  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});
