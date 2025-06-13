"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <React.Fragment>
      <Header openMenu={openMenu} toggleMenu={toggleMenu} />
      <Sidebar isOpen={openMenu} />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Welcome to Polygon Web</h1>
          <p>This is the home page of the Polygon Web application.</p>
        </div>
      </main>
    </React.Fragment>
  );
}
