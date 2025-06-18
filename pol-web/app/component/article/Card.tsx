"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Card.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        src="/images/mountain.jpg"
        alt="Article Image"
        className={styles.image}
      />
      <div className={styles.info}>
        <Link href="/article/1">
          <h2 className={styles.title}>記事タイトル</h2>
        </Link>
        <p className={styles.description}>
          この記事の概要がここに入ります。この記事の概要がここに入ります。この記事の概要がここに入ります。この記事の概要がここに入ります。この記事の概要がここに入りま...
        </p>
        <div className={styles.footer}>
          <span className={styles.author}>著者名 / </span>
          <span className={styles.date}>2023年10月1日</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
