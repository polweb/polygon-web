"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { auth, db } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import styles from "../login/login.module.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const allowedPattern = /^[ut]\d{6}@st\.pu-toyama\.ac\.jp$/;
    if (!allowedPattern.test(email)) {
      setError("このメールアドレスでは登録できません。");
      return;
    }

    if (password !== confirmPassword) {
      setError("パスワードが一致しません。");
      return;
    }

    if (!name.trim() || !grade.trim()) {
      setError("名前と学年を入力してください。");
      return;
    }

    try {
      auth.languageCode = "ja";

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestore にユーザーデータを先に登録
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name,
        grade,
        createdAt: serverTimestamp(),
      });

      // メール認証送信
      await sendEmailVerification(user);

      // メッセージ表示
      setMessage("登録に成功しました。認証用メールを送信しましたので、認証後にログインしてください。");

      // 5秒後にサインアウト・ログインページへ
      setTimeout(async () => {
        await signOut(auth);
        router.push("/login");
      }, 5000);
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("このメールアドレスは既に使用されています。");
      } else if (err.code === "auth/weak-password") {
        setError("パスワードは6文字以上にしてください。");
      } else {
        setError(`登録に失敗しました: ${err.message}`);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>新規登録</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">名前</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="grade">学年</label>
            <select
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className={styles.input}
            >
              <option value="">学年を選択してください</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="B3">B3</option>
              <option value="B4">B4</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
            </select>
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">パスワード確認</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className={styles.button}>新規登録</button>
        </form>
        <div>
          <p>
            既にアカウントをお持ちですか？{" "}
            <span
              className={styles.link}
              onClick={() => router.push("/login")}
            >
              ログイン
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
