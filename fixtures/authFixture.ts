import { test as base, expect, request } from '@playwright/test';
import dotenv from 'dotenv';
import { createArticleViaAPI } from '../utils/apiHelper';

dotenv.config();

// Extend the base test with a custom fixture
export const test = base.extend<{
  createTestArticle: { slug: string; title: string };
}>({
  // Define the fixture
  createTestArticle: async ({ request }, use) => {
    // Create article via API
    const article = await createArticleViaAPI(request);

    // Pass the article data to the test
    await use(article);
  },
});

// Optional: export expect for convenience
export { expect };
