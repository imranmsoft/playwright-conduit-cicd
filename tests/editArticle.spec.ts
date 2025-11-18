import { test, expect } from '../fixtures/authFixture';
import { ArticlePage } from '../pages/ArticlePage';
import { getArticlesViaAPI, editArticleViaAPI } from '../utils/apiHelper';

test('Edit Article - Positive', async ({ page, createTestArticle }) => {
  const { slug } = createTestArticle;
  const articlePage = new ArticlePage(page);

  await page.goto(`/editor/${slug}`, { waitUntil: 'networkidle' });

  const updatedTitle = `Updated Title ${Date.now()}`;
  const updatedBody = 'This is the updated article content.';

  await articlePage.editArticle(updatedTitle, updatedBody);

  // No need to reload — just wait for the article page to load
  await page.waitForSelector('.article-page h1', { state: 'visible', timeout: 10000 });
  await expect(page.locator('.article-page h1').first()).toHaveText(updatedTitle);
});
