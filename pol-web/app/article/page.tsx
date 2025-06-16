import Link from "next/link";

export default function ArticleListPage() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">記事一覧</h1>
        <ul className="space-y-4">
            <li>
                <Link href="/article/tierlist" className="text-white-500 hover:underline">
                    最強授業ティアリスト（2025）
                </Link>
            </li>
            <li>
                <Link href="/article/recommended" className="text-white-500 hover:underline">
                    💡 おすすめ学食
                </Link>
            </li>
        </ul>
        </div>
    );
}
