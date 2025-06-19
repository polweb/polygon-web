"use client";
import React from "react";
import styles from "./NewArticleCard.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons
import Link from "next/link";

const NewArticleCard = () => {
  return (
    <div className={styles.card}>
      <Link href="/articles">
        <img
          src="/images/mountain.jpg"
          alt="新しい記事"
          className={styles.headerImage}
        />
        <div className={styles.userInfo}>
          <img src="favicon.ico" alt="ユーザー" className={styles.userImage} />
          <p className={styles.userName}>ユーザー名</p>
        </div>
        <div className={styles.date}>
          <p>20XX年XX月XX日</p>
        </div>
        <div className={styles.footer}></div>
        <div className={styles.mainInfo}>
          <h2>記事のタイトル</h2>
          <p className={styles.description}>
            記事の説明文がここに入ります。記事の説明文がここに入ります。記事の説明文がここに入ります。記事の説明文がここに入ります。記事の説明文がここに入ります。記事の説明文がここに入ります。記事の説明文がここに入ります。記事の説明文がここ...
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewArticleCard;
