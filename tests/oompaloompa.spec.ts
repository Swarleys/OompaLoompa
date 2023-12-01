import { test, expect } from '@playwright/test';

test('Search oompa loompa', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForLoadState('networkidle');
    const oompaLoompaList = page.getByRole('main').getByRole('list');
    await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(25);
    // search by name
    const searchBox = page.getByRole('searchbox');
    await searchBox.fill('evangelia');
    await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(1);
    await expect(oompaLoompaList.getByAltText('evangelia')).toBeVisible();
    // search by last name
    await searchBox.fill('flasby');
    await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(1);
    // search by profession
    await searchBox.fill('developer');
    await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(8);
    // search without results
    await searchBox.fill('no results');
    await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(0);
});

test('Search oompa loompa, navigate to detail and back to landing', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForLoadState('networkidle');
    const oompaLoompaList = page.getByRole('main').getByRole('list');
    const searchBox = page.getByRole('searchbox');
    await searchBox.fill('evangelia');
    await oompaLoompaList.getByAltText('evangelia').click();
    await page.waitForURL('http://localhost:5173/2');
    await expect(page.getByRole('heading', { name: /evangelia/i })).toBeVisible();
    await page.getByRole('navigation').getByRole('link').click();
    await expect(page).toHaveURL('http://localhost:5173/');
});

test('Infinite scroll', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForLoadState('networkidle');
    const oompaLoompaList = page.getByRole('main').getByRole('list');
    await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(25);
    for (let i = 1; i < 20; i++) {
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await page.waitForTimeout(600);
        if (i === 20) {
            await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(500);
        } else {
            await expect(oompaLoompaList.getByRole('listitem')).toHaveCount(25 + (i) * 25);
        }
    }
});

test('Wrong url', async ({ page }) => {
    await page.goto('http://localhost:5173/wrongurl');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('http://localhost:5173/wrongurl');
    await expect(page.getByText('An error has ocurred')).toBeVisible();
});
