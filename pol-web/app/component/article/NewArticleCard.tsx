"use client";
import React from "react";
import styles from "./NewArticleCard.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons
import Link from "next/link";

interface NewArticleCardProps {
  title?: string;
  description?: string;
  userName?: string;
  userImage?: string;
  date?: string;
  path?: string;
  backgroundImage?: string;
}

const NewArticleCard = ({
  title,
  description,
  userName,
  userImage,
  date,
  path,
  backgroundImage,
}: NewArticleCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={path ?? "#"}>
        <img
          src={backgroundImage}
          alt="新しい記事"
          className={styles.headerImage}
        />
        <div className={styles.userInfo}>
          <img src={userImage} alt="ユーザー" className={styles.userImage} />
          <p className={styles.userName}>{userName}</p>
        </div>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
        <div className={styles.footer}></div>
        <div className={styles.mainInfo}>
          <h2>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewArticleCard;
