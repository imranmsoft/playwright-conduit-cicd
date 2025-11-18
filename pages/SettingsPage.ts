import { Page } from '@playwright/test';
import { settingsLocators } from '../locators/settingsLocators';

export class SettingsPage {
  constructor(private page: Page) {}

  async updateSettings(newBio: string) {
    await this.page.goto('/settings');
    await this.page.getByRole('textbox', { name: 'Short bio about you' }).fill("newBio");
    //await this.page.getByRole('textbox', { name: 'Short bio about you' })
    await this.page.getByRole('button', { name: 'Update Settings' }).click();
  }
}
