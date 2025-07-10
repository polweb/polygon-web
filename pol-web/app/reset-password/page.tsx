// app/reset-password/page.tsx
"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const allowedPattern = /^[ut]\d{6}@st\.pu-toyama\.ac\.jp$/;
    if (!allowedPattern.test(email)) {
      setError("このメールアドレスではリセットできません。");
      return;
    }

    try {
      auth.languageCode = "ja"; // ★追加：日本語化
      await sendPasswordResetEmail(auth, email);
      setMessage("パスワードリセット用のメールを送信しました。メールをご確認ください。");
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        setError("このメールアドレスのユーザーは見つかりませんでした。");
      } else {
        setError("パスワードリセットに失敗しました。");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>パスワードリセット</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">登録メールアドレス</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className={styles.button}>
            リセットメール送信
          </button>
        </form>
        <div>
          <p>
            <span
              className={styles.link}
              onClick={() => router.push("/login")}
            >
              ログインページへ戻る
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}