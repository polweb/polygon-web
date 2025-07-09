"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

// ナビゲーション状態コンテキスト
type NavigationContextType = {
  openMenu: boolean;
  toggleMenu: () => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};

// ナビゲーションプロバイダーコンポーネント
export default function NavigationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openMenu, setOpenMenu] = useState(true); // 初期値を固定

  useEffect(() => {
    // クライアントサイドでのみ実行
    const handleResize = () => {
      const isWideScreen = window.innerWidth <= 1400;
      setOpenMenu(isWideScreen);
    };

    // 初回実行
    handleResize();

    // リサイズイベントリスナーを追加
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <NavigationContext.Provider value={{ openMenu, toggleMenu }}>
      <Header openMenu={openMenu} toggleMenu={toggleMenu} />
      <Sidebar isOpen={!openMenu} />
      {children}
    </NavigationContext.Provider>
  );
}
