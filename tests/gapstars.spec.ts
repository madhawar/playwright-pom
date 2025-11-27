import { test, expect } from '@playwright/test';
import { TheInternetPage } from './../pages/theInternetPage.js';

test('Select any five elements from the list.', async ({ page }) => {
    const theInternetPage = new TheInternetPage(page);
        await theInternetPage.goto();
        await theInternetPage.clickDragAndDrop();
        await theInternetPage.clickDropdown();
        await theInternetPage.clickFloatingMenu();
        await theInternetPage.clickEntryAd();
        await theInternetPage.clickContextMenu();
});