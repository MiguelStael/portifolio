import { test, expect, Page } from '@playwright/test';

const BASE = 'http://localhost:5173/portifolio/';

async function openPanel(page: Page) {
  await page.goto(BASE);
  await page.locator('.fab-accessibility').click();
  await page.locator('.accessibility-panel.is-open').waitFor();
}

test('accessibility panel opens and closes', async ({ page }) => {
  await page.goto(BASE);
  await page.screenshot({ path: 'tests/home.png' });
  await page.locator('.fab-accessibility').click();
  await page.locator('.accessibility-panel.is-open').waitFor();
  await page.screenshot({ path: 'tests/panel-open.png' });
  // close via X button
  await page.locator('.close-panel').click();
  await expect(page.locator('.accessibility-panel.is-open')).toHaveCount(0);
  await page.screenshot({ path: 'tests/panel-closed.png' });
});

test('invert colors toggle works', async ({ page }) => {
  await openPanel(page);
  await page.locator('button:has-text("Inverter Cores")').click();
  await page.screenshot({ path: 'tests/invert-on.png' });
  await page.locator('button:has-text("Inverter Cores")').click();
  await page.screenshot({ path: 'tests/invert-off.png' });
  const on = await page.locator('body.invert-colors').count();
  console.log('invert-colors class count after toggle off:', on);
});

test('high contrast toggle works', async ({ page }) => {
  await openPanel(page);
  await page.locator('button:has-text("Alto Contraste")').click();
  await page.screenshot({ path: 'tests/contrast-on.png' });
  await page.locator('button:has-text("Alto Contraste")').click();
  await page.screenshot({ path: 'tests/contrast-off.png' });
});

test('theme toggle works', async ({ page }) => {
  await openPanel(page);
  await page.locator('button:has-text("Modo Claro")').click();
  await page.screenshot({ path: 'tests/light-mode.png' });
  await page.locator('button:has-text("Modo Escuro")').click();
  await page.screenshot({ path: 'tests/dark-mode.png' });
});

test('font size increases', async ({ page }) => {
  await openPanel(page);
  const before = await page.evaluate(() => getComputedStyle(document.documentElement).fontSize);
  await page.locator('button:has-text("Tamanho Fonte")').click();
  await page.screenshot({ path: 'tests/font-big.png' });
  const after = await page.evaluate(() => getComputedStyle(document.documentElement).fontSize);
  console.log('font before:', before, 'after:', after);
});

test('reading guide follows mouse', async ({ page }) => {
  await openPanel(page);
  await page.locator('button:has-text("Guia de Leitura")').click();
  await page.mouse.move(200, 300);
  await page.screenshot({ path: 'tests/reading-guide.png' });
});

test('mobile responsive', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(BASE);
  await page.screenshot({ path: 'tests/mobile-home.png' });
  await page.locator('.fab-accessibility').click();
  await page.screenshot({ path: 'tests/mobile-panel.png' });
});

test('tablet responsive', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(BASE);
  await page.screenshot({ path: 'tests/tablet-home.png' });
  await page.locator('.fab-accessibility').click();
  await page.screenshot({ path: 'tests/tablet-panel.png' });
});
