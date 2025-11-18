import { Page } from '@playwright/test';
import { articleLocators } from '../locators/articleLocators';

export class ArticlePage {
  constructor(private page: Page) {}

  async createArticle(title: string, body: string, tags: string[]) {
    
    await this.page.getByRole('link', { name: 'New Article' }).click();
    await this.page.fill(articleLocators.titleInput, title);
    await this.page.getByPlaceholder("What's this article about?").fill("Your article summary");
    await this.page.fill(articleLocators.bodyInput, body);
    await this.page.fill(articleLocators.tagsInput, tags.join(','));
    await this.page.click(articleLocators.publishButton);
  }

  async editArticle(newTitle: string, newBody: string) {
    await this.page.fill(articleLocators.titleInput, newTitle);
    await this.page.fill(articleLocators.bodyInput, newBody);
    await this.page.click(articleLocators.publishButton);
  }

  async deleteArticle() {
    await this.page.click(articleLocators.deleteButton);
  }

  async filterByTag(tag: string) {
    await this.page.click(`text=${tag}`);
  }
}
