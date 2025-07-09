import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./blog.module.scss";

const md = `
# 大学に来て分からなかった場所3選

迷いに迷いました。

## ①F101
Q. まずFってどこですか？

A. 講義棟のこと。

Q. 講義棟ってどこですか？

A. 中央棟の東側。

## 何もわかりません。

### 基本は本部棟から入って講義棟に入るけど、
### 少し進んで後ろ振り向かないと見つけられない。無理。

## ②売店
### 生協に加入するために、売店に来てと言われた。
### どこですか？地図にも乗っていない。
### お昼に人の流れについて行ったらありました。

## ③情報基盤センター
### 場所は伝えられたんですけど...
どう見たって放送大学って書いてある。
  `;

const Home = () => {
  return (
    <div className="prose">
      <h1 className={styles.article}>
        <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>
      </h1>
    </div>
  );
};

export default Home;
