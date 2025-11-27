import { expect, type Locator, type Page } from '@playwright/test';
import { dataFile } from '../fixtures/dataFile';

export class TheInternetPage {
    readonly page: Page;
    readonly menuDragAndDrop: Locator;
    readonly menuDropDown: Locator;
    readonly menuFloatingmenu: Locator;
    readonly menuEntryAd: Locator;
    readonly menuContextMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuDragAndDrop = page.locator('//a[@href="/drag_and_drop"]');
        this.menuDropDown = page.locator('//a[@href="/dropdown"]');
        this.menuFloatingmenu = page.locator('//a[@href="/floating_menu"]');
        this.menuEntryAd = page.locator('//a[@href="/entry_ad"]');
        this.menuContextMenu = page.locator('//a[@href="/context_menu"]');
    }

    async goto() {
        await this.page.goto(dataFile.web.baseUrl);
    }

    async clickDragAndDrop() {
        await this.menuDragAndDrop.click();
        await expect(this.page).toHaveURL(/.*\/drag_and_drop/);
        await this.page.goto('https://the-internet.herokuapp.com');
    }

    async clickDropdown() {
        await this.menuDropDown.click();
        await expect(this.page).toHaveURL(/.*\/drag_and_drop/);
        // await this.page.getByText('Drag and Drop').click();
        await this.page.goto(dataFile.web.baseUrl);
    }

    async clickFloatingMenu() {
        await this.menuFloatingmenu.click();
        await expect(this.page).toHaveURL(/.*\/floating_menu/);
        // await this.page.getByText('Floating Menu').click();
        await this.page.goto(dataFile.web.baseUrl);
    }

    async clickEntryAd() {
        await this.menuEntryAd.click();
        await expect(this.page).toHaveURL(/.*\/entry_ad/);
        // await this.page.getByText('Entry Ad').click();
        await this.page.goto(dataFile.web.baseUrl);
    }

    async clickContextMenu() {
        await this.menuContextMenu.click();
        await expect(this.page).toHaveURL(/.*\/context_menu/);
        // await this.page.getByText('Context Menu').click();
        await this.page.goto(dataFile.web.baseUrl);
    }
}