"use client";
/*
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Polygon Web</h1>
      <p>ああああああいいいいいいい</p>
      <li>
        <Link href="/auther">
        auther 1
        </Link>
        <Link href="./component/header/index.tsx">
        index 1
        </Link>
      </li>

    </div>
  );
}
  */
import styles from "./index.module.scss";
import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from 'next/navigation';
export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  const [query, setQuery] = useState(''); //ここから検索
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };  
  //ここまで検索
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            Polygon Web
          </Link>
          
        </div>
        <div className={styles.login}>
          <Link href="/login">
          ログイン
          </Link>
        </div>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
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

      <div className={styles.search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-400 rounded-lg p-2"
      />
      <button onClick={handleSearch} className="ml-4 bg-gray-700 hover:bg-gray-200 text-white py-2 px-4 border border-gray-50 rounded">検索</button>
    </div>
    </React.Fragment>
  )
}

