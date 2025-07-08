"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Card from "./component/article/Card";
import RecentPost from "./component/rightBar/recentPost";
import NewArticleCard from "./component/article/NewArticleCard";

interface Article {
  title: string;
  description: string;
  userName: string;
  userImage: string;
  date: string;
  path: string;
  backgroundImage?: string;
}

const articleList: Article[] = [
  {
    title: "最強教養科目ランキング|Tier表【富山県立大学】",
    description: "富山県立大学の教養科目をランキング形式で紹介します。",
    userName: "Polygon",
    userImage: "icon0.svg",
    backgroundImage:
      "https://www.pu-toyama.ac.jp/tpu/wp-content/themes/toyama_2023/images_special/new_universitybuilding/13.jpg",
    date: "2024-06-01",
    path: "/articles/tier",
  },
  {
    title: "学食ランキング【富山県立大学】",
    description: "富山県立大学の学食をランキング形式で紹介します。",
    userName: "Polygon",
    userImage: "icon0.svg",
    backgroundImage:
      "https://www.sophia.ac.jp/assets/uploads/2022/11/%E9%A3%9F%E5%A0%82-1024x576.jpg",
    date: "2024-06-02",
    path: "/articles/foodtier",
  },
  {
    title: "test",
    description: "test description",
    userName: "yamada",
    userImage: "/images/users/suzuki.png",
    date: "2024-06-03",
    path: "/articles/3",
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.Cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <div className={styles.mainBox}>
            <div className={styles.newArticleCards}>
              {articleList.map((article, index) => (
                <NewArticleCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  userName={article.userName}
                  userImage={article.userImage}
                  backgroundImage={article.backgroundImage}
                  date={article.date}
                  path={article.path}
                />
              ))}
            </div>
            <div className={styles.rightBar}>
              <RecentPost />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
