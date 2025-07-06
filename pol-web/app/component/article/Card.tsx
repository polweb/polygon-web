"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Card.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"
        alt="Article Image"
        className={styles.image}
      />
      <div className={styles.info}>
        <Link href="/article/1">
          <h2 className={styles.title}>test</h2>
        </Link>
        <p className={styles.description}>test</p>
        <div className={styles.footer}>
          <span className={styles.author}>著者名 / </span>
          <span className={styles.date}>2023年10月1日</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
