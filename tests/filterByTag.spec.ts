import { test, expect } from '../fixtures/authFixture';
import { HomePage } from '../pages/HomePage';

test('Filter Articles by Tag - Positive', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHome();
  await homePage.clickTag('Test');

  const tags = await homePage.getVisibleTags();
  expect(tags).toContain(' Test ');
});

