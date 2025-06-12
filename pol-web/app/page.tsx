"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./component/header/Header";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <React.Fragment>
      <Header />
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href="/page">Polygon Web</Link>
        </div>
        <div className={styles.login}>
          <Link href="/login">ログイン</Link>
        </div>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
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
    </React.Fragment>
  );
}
