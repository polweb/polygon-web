"use client";

import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.scss";
import {
  FaHome,
  FaFire,
  FaNewspaper,
  FaCloudSun,
  FaFutbol,
  FaShoppingCart,
  FaTwitter,
  FaTrain,
  FaBook,
} from "react-icons/fa";

interface SidebarProps {
  isOpen?: boolean;
}

const menuItems = [
  {
    label: "大学HP",
    href: "https://www.pu-toyama.ac.jp/",
    icon: <FaHome size={22} color="#555555" />,
  },
  {
    label: "大学生協",
    href: "https://www.pu-toyama.coop/",
    icon: <FaShoppingCart size={22} color="#555555" />,
  },
  {
    label: "Webclass",
    href: "https://tpuwcwebsv.pu-toyama.ac.jp/webclass/login.php",
    icon: <FaNewspaper size={22} color="#555555" />,
  },
  {
    label: "履修登録システム",
    href: "https://rishuweb.pu-toyama.ac.jp/",
    icon: <FaCloudSun size={22} color="#555555" />,
  },
  {
    label: "大学図書館",
    href: "https://www.pu-toyama.ac.jp/library/",
    icon: <FaBook size={22} color="#555555" />,
  },
  {
    label: "あいの風とやま鉄道HP",
    href: "https://ainokaze.co.jp/",
    icon: <FaTrain size={22} color="#555555" />,
  },
  {
    label: "大学公式X",
    href: "https://x.com/ToyamaPrefUniv",
    icon: <FaTwitter size={22} color="#555555" />,
  },
  {
    label: "生協公式X",
    href: "https://x.com/TPUcoop?lang=ja",
    icon: <FaTwitter size={22} color="#555555" />,
  },
  {
    label: "Polygon公式X",
    href: "https://x.com/st_DXcenter",
    icon: <FaTwitter size={22} color="#555555" />,
  },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <React.Fragment>
      <div className={styles.sidebar}></div>
      <div className={`${styles.drawerMenu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <div className={styles.mainContent}>
              <div className={styles.homeButton}>
                <Link href="/">
                  <span className={styles.favicon}>
                    <FaHome size={25} color="#555555" />
                  </span>
                </Link>
                <p className={styles.homeButtonText}>ホーム</p>
              </div>
              <div className={styles.homeButton}>
                <Link href="/trending">
                  <span className={styles.favicon}>
                    <FaFire size={25} color="#555555" />
                  </span>
                </Link>
                <p className={styles.homeButtonText}>急上昇</p>
              </div>
            </div>
          </li>
          {menuItems.map((item) => (
            <li className={styles.menuItems} key={item.href}>
              <Link href={item.href}>
                <div className={styles.menuItem}>
                  <span className={styles.favicon}>{item.icon}</span>
                  <span className={styles.menuText}>{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
