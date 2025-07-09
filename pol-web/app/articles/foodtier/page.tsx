import { getFoodTierItems } from "@/libs/client";
import Image from "next/image"; // 画像を使用する場合
import TierItemCard from "./TierItemCard";
import styles from './TierListPage.module.css';
export const revalidate = 60; // ISR (Incremental Static Regeneration) を設定する場合 (任意)

export default async function TierListPage() {
  const { contents: tierItems } = (await getFoodTierItems()) as {
    contents: TierItem[];
  };

  type TierItem = {
    id: string;
    name: string;
    price: string;
    tier: string;
    description?: string;
    image?: { url: string };
    linkUrl?: string;
    // その他必要なフィールド
  };
  type GroupedItems = Record<string, TierItem[]>;
  // ティアレベルごとにアイテムをグループ化する
  const groupedTierItems = tierItems.reduce(
    (acc: GroupedItems, item: TierItem) => {
      const tier = item.tier || "Uncategorized"; // ティアレベルが存在しない場合のフォールバック
      if (!acc[tier]) {
        acc[tier] = [];
      }
      acc[tier].push(item);
      return acc;
    },
    {}
  );

  // ティアレベルの表示順序を定義（S, A, B, Cなどの順）
  const tierOrder = ["S", "A", "B", "C", "Uncategorized"]; // 必要に応じて調整

<<<<<<< HEAD
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        【富山県立大学】最強学食ランキング|Tier表【富山県立大学】
      </h1>
      <h2 className="text-3xl font-bold mb-8 text-center">学食ティア表</h2>
=======
    return (
    <div className={styles.container}>
    <h1 className={styles.pageTitle}>【富山県立大学】最強学食ランキング|Tier表【富山県立大学】</h1>    
    <h2 className={styles.pageTitle}>学食ティア表</h2>
>>>>>>> b0f4ea3acbf6761f8f4106c8303fb4cd119ca1af

      {tierOrder.map((tier) => {
        const items = groupedTierItems[tier];
        if (!items || items.length === 0) {
          return null; // そのティアレベルにアイテムがない場合は表示しない
        }
        return (
<<<<<<< HEAD
          <div key={tier} className="mb-8 p-4 border rounded-lg shadow-md">
            <h3
              className={`text-2xl font-semibold mb-4 ${
                tier === "S"
                  ? "text-red-600"
                  : tier === "A"
                  ? "text-orange-500"
                  : tier === "B"
                  ? "text-blue-500"
                  : tier === "C"
                  ? "text-green-500"
                  : ""
              }`}
            >
              {tier} ティア
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((item) => (
                <TierItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
=======
            <div key={tier} className={styles.tierSection}>
            <h3 className={`${styles.tierTitle} ${styles[`tierTitle${tier}`]}`}>
                {tier} ティア
            </h3>
            <div className={styles.tierGrid}>
                {items.map((item) => (
                    <TierItemCard key={item.id} item={item} />
                ))}
                    </div>
                </div>
                );
            })}
        </div>
    );
}
>>>>>>> b0f4ea3acbf6761f8f4106c8303fb4cd119ca1af
