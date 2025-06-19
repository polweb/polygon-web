"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Card from "./component/article/Card";
import NewArticleCard from "./component/article/NewArticleCard";

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
          <div className={styles.newArticleCards}>
            <NewArticleCard />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
