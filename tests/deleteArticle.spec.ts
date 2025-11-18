// tests/purchase.spec.ts (Corrected)

import { test, expect } from '../fixtures/authFixture';
import { ArticlePage } from '../pages/ArticlePage';

test('Delete Article - Positive', async ({ page, createTestArticle }) => {
 
  const { slug } = createTestArticle; 
  
  const articlePage = new ArticlePage(page);

  await page.goto(`/article/${slug}`);
  await articlePage.deleteArticle();

  
});