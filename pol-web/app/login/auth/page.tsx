"use client"; // これを追加

import { useState, FormEvent } from "react"; // FormEventをインポート
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // ... その他のFirebase関数
} from "firebase/auth";
// ... 以下のコード
import { auth } from "../../../lib/firebase"; // Firebaseの設定をインポート
import { useRouter } from "next/navigation"; // useRouterをインポー
import React from "react";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // イベントの型をFormEventに
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("ログインしました！");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("新規登録しました！");
      }
      router.push("/");
    } catch (error: any) {
      // errorの型をanyにするか、より具体的な型を指定
      console.error("認証エラー:", error.message);
      alert(`認証エラー: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>{isLogin ? "ログイン" : "新規登録"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className="border border-gray-300 rounded p-1"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            } // イベントの型を明示
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="border border-gray-300 rounded p-1"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
        </div>
        <button className="border" type="submit">
          {isLogin ? "ログイン" : "新規登録"}
        </button>
      </form>
      <button className="border" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "新規登録はこちら" : "ログインはこちら"}
      </button>
    </div>
  );
};

export default AuthPage;
