"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Card from "./component/article/Card"; // Assuming you have a Card component for articles

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <React.Fragment>
      <Header openMenu={openMenu} toggleMenu={toggleMenu} />
      <Sidebar isOpen={openMenu} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.Cards}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
