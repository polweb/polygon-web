"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.hamburger}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className={styles.logo}>
            <img
              src="/favicon.ico"
              alt="Polygon Web Logo"
              className={styles.favicon}
              width={24}
              height={24}
            />
            <Link href="/page">
              <p>Polygon Web</p>
            </Link>
          </div>
        </div>
        <div className={styles.searchBox}>
          <div className={styles.searchIcon}>
            <FaSearch size={18} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            autoComplete="off"
            autoCorrect="off"
            data-from-type="other"
          />
        </div>
        <div className={styles.rightContainer}>
          <Link href="/login">
            <div className={styles.login}>ログイン</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
