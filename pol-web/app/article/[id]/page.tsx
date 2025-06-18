import { notFound } from "next/navigation";

const articles = {
  tierlist: {
    title: "最強授業ティア表（2025）",
    body: "ティア表の内容をここに書く...",
  },
  recommended: {
    title: "💡 おすすめ学食",
    body: "おすすめ学食...",
  },
};

type ArticleId = keyof typeof articles;

export default function ArticlePage({ params }: { params: { id: string } }) {
  if (!Object.prototype.hasOwnProperty.call(articles, params.id)) {
    return notFound();
  }
  const article = articles[params.id as ArticleId];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}
