"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Sidebar.module.scss"; // Adjust the path as necessary
import { FaHome, FaFire } from "react-icons/fa"; // Importing a search icon from react-icons

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.sidebar}></div>
      <div className={`${styles.drawerMenu} ${styles.open}`}>
        <ul>
          <li>
            <div className={styles.mainContent}>
              <div className={styles.homeButton}>
                <Link href="/">
                  <span className={styles.favicon}>
                    <FaHome size={20} color="#555555" />
                  </span>
                </Link>
                <p className={styles.homeButtonText}>ホーム</p>
              </div>
              <div className={styles.homeButton}>
                <Link href="/">
                  <span className={styles.favicon}>
                    <FaFire size={20} color="#555555" />
                  </span>
                </Link>
                <p className={styles.homeButtonText}>急上昇</p>
              </div>
            </div>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
