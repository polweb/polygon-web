import Link from "next/link";
import { getArticles } from "@/libs/client";

export default async function StaticPage() {
    const { contents }  = await getArticles();

    if (!contents) {
        return <h1>No Contents</h1>;
    }

    return (
        <>
            <div>
                <ul>
                    {contents.map((article) => (
                    <li key={article.id}>
                        <Link href={`/articles/${article.id}`}>{article.title}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
