// app/tier/TierItemCard.tsx

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TierItemCard.module.css';

type TierItem = {
    id: string;
    name: string;
    tier: string;
    description?: string;
    image?: { url: string };
    linkUrl?: string;
};

export default function TierItemCard({ item }: { item: TierItem }) {
    // 従来のホバー状態
    const [isHovering, setIsHovering] = useState(false);
    // ★ クリックされた状態を管理するstateを追加
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