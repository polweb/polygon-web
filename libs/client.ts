import { createClient } from 'microcms-js-sdk';

export type Article = {
    id: string;
    title: string;
    body: string;   
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

export const getArticles = async () => {
    const articles = await client.getList<Article>({
    endpoint: "articles"
    });
    return articles;
}

export const getDetail = async (contentId: string) => {
    const article = await client.getListDetail<Article>({
        endpoint: "articles",
        contentId,
    });
    return article;
};