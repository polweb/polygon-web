"use client";

import styles from "./index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
    </React.Fragment>
  );
}
