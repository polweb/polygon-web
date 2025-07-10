// app/login/page.tsx
"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // メールパターンチェック（uから始まり@st.pu-toyama.ac.jpで終わる）
    const allowedPattern = /^[ut]\d{6}@st\.pu-toyama\.ac\.jp$/;
    if (!allowedPattern.test(email)) {
      setError("このメールアドレスではログインできません。");
      return;
    }


    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログインに成功しました。");
      // ログイン後のページへ遷移
      router.push("/");
    } catch (err: any) {
      setError("ログインに失敗しました。");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label>パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
            /> ログインしたままにする
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className={styles.button}>ログイン</button>
        </form>
        <div>
          <p
          className={styles.link}
          onClick={() => router.push("/reset-password")}
          >
            パスワードをお忘れですか？
          </p>
        </div>
        <div>
          <p>
            初めてのご利用ですか？{" "}
            <span
            className={styles.link}
            onClick={() => router.push("/signup")}
            >
              新規登録
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}