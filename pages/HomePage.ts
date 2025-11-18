import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigateToHome() {
    await this.page.goto('/');
  }

  async clickTag(tag: string) {
    await this.page.click(`.tag-list >> text=${tag}`);
  }

  async isArticleVisible(title: string): Promise<boolean> {
    return await this.page.locator(`.preview-link >> text=${title}`).isVisible();
  }

  async openArticle(title: string) {
    await this.page.click(`.preview-link >> text=${title}`);
  }

  async getVisibleTags(): Promise<string[]> {
    return await this.page.locator('.tag-list a').allTextContents();
  }
}
