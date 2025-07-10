// app/tier/TierItemCard.tsx

"use client"; // ★ このファイルがClient Componentであることを宣言

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TierItemCard.module.css';
// page.tsxで定義した型を再度定義します
type TierItem = {
    id: string;
    name: string;
    price: string;
    tier: string;
    description?: string;
    image?: { url: string };
    linkUrl?: string;
};

// propsとしてitemを受け取るようにします
export default function TierItemCard({ item }: { item: TierItem }) {
  // ポップアップの表示状態を管理するためのstate
    const [isHovering, setIsHovering] = useState(false);

    const [isClicked, setIsClicked] = useState(false);

    // ★ ホバー中、またはクリックされている場合にポップアップを表示
    const shouldShowPopup = isHovering || isClicked;

    const Popup = () => {
        if (!shouldShowPopup || !item.description) {
            return null;
        }

        const popupContent = (
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
        );

        // ★ クリックイベントの伝播を止めるハンドラ
        const stopPropagation = (e: React.MouseEvent) => {
            e.stopPropagation();
        };

        if (item.linkUrl) {
            return (
                <Link
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.descriptionPopup}
                    onClick={stopPropagation} // ポップアップ内のリンクをクリックしても、カードのクリック状態は変わらないようにする
                >
                    {popupContent}
                </Link>
            );
        }

        return (
            <div className={styles.descriptionPopup} onClick={stopPropagation}>
                {popupContent}
            </div>
        );
    };

    return (
        // ★ カード本体にonClickイベントを追加
        <div
            className="border p-3 rounded-lg text-center flex flex-col items-center relative cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsClicked(prev => !prev)} // クリックでisClickedの状態を反転させる
        >
            {item.image && (
                <div className={styles.imageContainer}>
                    <Image
                        src={item.image.url}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            <p className={styles.name}>{item.name}</p>

            <Popup />
        </div>
    );
}