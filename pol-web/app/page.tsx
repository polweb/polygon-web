"use client";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Card from "./component/article/Card";
import RecentPost from "./component/rightBar/recentPost";
import NewArticleCard from "./component/article/NewArticleCard";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from 'next/navigation';

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
  const [openMenu, setOpenMenu] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        
        <div className={styles.login}>
          <Link href="/login">ログイン</Link>
        </div>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={menuFunction}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>

      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : ""}`}>
        <ul>
          <div className={styles.close} onClick={menuFunction}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>サブメニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>サブメニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>サブメニュー</p>
            </Link>
          </li>
        </ul>
      </div>

      

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
