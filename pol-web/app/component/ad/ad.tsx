import React from "react";
import styles from "./ad.module.scss";

const Ad: React.FC = () => {
  const handleChildDivClick = () => {
    const adExited = document.querySelector(
      `.${styles.adExited}`
    ) as HTMLElement;
    if (adExited) {
      adExited.style.opacity = "1";
      adExited.style.display = "block";
    }
  };

  return (
    <div className={styles.adContainer}>
      <a
        href="https://polygon.pu-toyama.ac.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/ad.png" alt="広告" className={styles.adImage} />
      </a>
      <div className={styles.deleteButton} onClick={handleChildDivClick}>
        ✕
      </div>
      <div className={styles.adExited}>この広告の表示を停止しました。</div>
    </div>
  );
};

export default Ad;
