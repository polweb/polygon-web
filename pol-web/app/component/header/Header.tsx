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
          <div className={styles.burgermenu}>
            <Link href="/login">Menu</Link>
          </div>
          <div className={styles.logo}>
            <Link href="/page">Polygon Web</Link>
          </div>
          <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
              <FaSearch size={13} />
            </div>
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              autoCorrect="off"
              data-from-type="other"
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.login}>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
