"use client";

import React, { useState, createContext, useContext } from "react";
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
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <NavigationContext.Provider value={{ openMenu, toggleMenu }}>
      <Header openMenu={openMenu} toggleMenu={toggleMenu} />
      <Sidebar isOpen={openMenu} />
      {children}
    </NavigationContext.Provider>
  );
}
