"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

interface HeaderProps {
  openMenu?: boolean;
  toggleMenu?: () => void;
}

const Header = ({ openMenu, toggleMenu }: HeaderProps) => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <label className={styles.hamburger} tabIndex={0}>
            <input
              type="checkbox"
              checked={openMenu}
              onChange={toggleMenu}
              style={{ display: "none" }}
              aria-label="メニューを開く"
            />
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </label>
          <div className={styles.logo}>
            <Link href="/">
            <img
              src="/icon0.svg"
              alt="Polygon Web Logo"
              className={styles.logoIcon}
              width={24}
              height={24}
            />
            </Link>
            <Link href="/">
            <img
              src="/icon1.svg"
              alt="Polygon Web Name Logo"
              className={styles.namelogoIcon}
              width={24}
              height={24}
            />
            </Link>
          </div>
        </div>
        <div className={styles.searchBoxMobile}>
          <div className={styles.searchIcon}>
            <FaSearch size={18} />
          </div>
        </div>
        <div className={styles.searchBoxDesk}>
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
