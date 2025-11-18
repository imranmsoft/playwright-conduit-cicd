import dotenv from 'dotenv';
dotenv.config();

export async function createArticleViaAPI(request: any) {
  const token = process.env.API_TOKEN;

  if (!token) {
    throw new Error('API_TOKEN is missing from environment variables.');
  }


  const response = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: {
      article: {
        title: `Test Article ${Date.now()}`,
        description: 'Test description',
        body: 'Test body content',
        tagList: ['test'],
      },
    },
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok()) {
    const body = await response.text();
    throw new Error(`Request failed: ${response.status()} - ${body}`);
  }

  const data = await response.json();
  return {
    slug: data.article.slug,
    title: data.article.title,
  };
}

export async function getArticlesViaAPI(request: any) {
  const token = process.env.API_TOKEN;

  if (!token) {
    throw new Error('API_TOKEN is missing from environment variables.');
  }

  // GET all articles
  const response = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', {
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok()) {
    const body = await response.text();
    throw new Error(`Request failed: ${response.status()} - ${body}`);
  }

  const data = await response.json();
  return data.articles;
}

export async function editArticleViaAPI(request: any, slug: string, title: string, description: string, body: string, tagList: string[] = []) {
  const token = process.env.API_TOKEN;

  if (!token) {
    throw new Error('API_TOKEN is missing from environment variables.');
  }

  // PUT to update article
  const response = await request.put(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {
    data: {
      article: {
        title,
        description,
        body,
        tagList,
      },
    },
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok()) {
    const body = await response.text();
    throw new Error(`Request failed: ${response.status()} - ${body}`);
  }

  const data = await response.json();
  return {
    slug: data.article.slug,
    title: data.article.title,
    description: data.article.description,
    body: data.article.body,
    tagList: data.article.tagList,
  };
}