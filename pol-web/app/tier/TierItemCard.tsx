// app/tier/TierItemCard.tsx

"use client"; // ★ このファイルがClient Componentであることを宣言

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// page.tsxで定義した型を再度定義します
type TierItem = {
    id: string;
    name: string;
    tier: string;
    description?: string;
    image?: { url: string };
    linkUrl?: string;
};

// propsとしてitemを受け取るようにします
export default function TierItemCard({ item }: { item: TierItem }) {
  // ポップアップの表示状態を管理するためのstate
    const [isHovering, setIsHovering] = useState(false);

    const CardContent = () => (
    <>
        {item.image && (
        <div className="relative w-20 h-20 mb-2">
            <Image
            src={item.image.url}
            alt={item.name}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        </div>
    )}
    <p className="font-medium text-lg">{item.name}</p>
    {isHovering && item.description && (
        <div
            className="absolute top-0 left-full ml-2 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-10"
            dangerouslySetInnerHTML={{ __html: item.description }}
        />
    )}
    </>
);

  // item.linkUrl にURLが設定されているかチェック
if (item.linkUrl) {
    // URLがある場合は Link コンポーネントで全体を囲んで返す
    return (
        <Link
        href={item.linkUrl}
        target="_blank" // 別のタブで開く
        rel="noopener noreferrer" // セキュリティ対策
        className="block border p-3 rounded-lg text-center flex flex-col items-center relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        >
        <CardContent />
        </Link>
    );
}

  // URLがない場合は、今まで通りの div を返す
return (
    <div
        className="border p-3 rounded-lg text-center flex flex-col items-center relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <CardContent />
    </div>
    );
}