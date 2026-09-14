import { test, expect } from "@playwright/test";

test("homepage fits desktop, tablet and mobile with rendered assets", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("ENGINEERED.");
    await expect(page.locator(".nx-hero-copy")).toHaveCSS("opacity", "1");
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
    await expect(page.locator(".nx-hero-art")).toHaveCSS(
      "background-image",
      /intelligence/,
    );
    const imageOK = await page.evaluate(async () => {
      const im = new Image();
      im.src = "/brand/intelligence.png";
      await im.decode();
      return im.naturalWidth > 1000;
    });
    expect(imageOK).toBe(true);
    await page.screenshot({ path: `test-results/hero-${width}.png` });
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
  }
  expect(errors).toEqual([]);
});
test("systems, conversation tabs and mobile navigation work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /AI Voice Agent Answer/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("dialog").getByRole("link", { name: "Discuss this system" }),
  ).toHaveAttribute("href", /interest=AI%20Voice%20Agent/);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.getByRole("tab", { name: "Sales enquiries" }).click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "Website forms and WhatsApp.",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Industries" })
    .click();
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeVisible();
});
test("contact validates entries and prefills solution interest", async ({
  page,
}) => {
  await page.goto("/contact/?interest=AI%20Voice%20Agent");
  await expect(page.getByLabel("What can we help with?")).toHaveValue(
    "AI Voice Agent",
  );
  await page.getByRole("button", { name: "Prepare my enquiry" }).click();
  await expect(page.getByRole("status")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "fahad.kr@gmail.com" }).first(),
  ).toHaveAttribute("href", "mailto:fahad.kr@gmail.com");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    )
    .toBe(true);
});
test("published navigation destinations resolve", async ({ request }) => {
  for (const path of [
    "/about/",
    "/contact/",
    "/privacy/",
    "/how-we-work/",
    "/solutions/growth-strategy/",
    "/solutions/intelligent-growth-systems/",
    "/solutions/digital-experience/",
    "/solutions/demand-content/",
    "/intelligence/1/",
    "/intelligence/2/",
    "/intelligence/3/",
  ]) {
    const r = await request.get(path);
    expect(r.status(), path).toBe(200);
    expect(await r.text()).not.toContain("ready to be expanded");
  }
});
