import { test, expect } from '../fixtures/authFixture';
import { SettingsPage } from '../pages/SettingsPage';

test('Update User Settings - Positive', async ({ page }) => {
  const settingsPage = new SettingsPage(page);

  await settingsPage.updateSettings('Updated bio content');
  await expect(page.locator('textarea')).toHaveValue('newBio');
});
