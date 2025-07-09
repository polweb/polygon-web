"use client";

import React, { useEffect, useState } from "react";
import styles from "./library.module.scss";

type ScheduleData = {
  data: string[];
  comment: string[];
};

type ScheduleMap = {
  [key: string]: string;
};

const scheduleData: ScheduleData = {
  data: [
    "normal",
    "normal",
    "normal",
    "normal",
    "saturday",
    "closed",
    "normal",
    "normal",
    "normal",
    "normal",
    "normal",
    "saturday",
    "closed",
    "normal",
    "normal",
    "normal",
    "normal",
    "normal",
    "saturday",
    "closed",
    "closed",
    "long",
    "long",
    "long",
    "long",
    "saturday",
    "closed",
    "long",
    "long",
    "long",
    "long",
  ],
  comment: [
    "21日（月）…海の日",
    "22日（火）以降の平日…延長開館（8：30～20：00開館）",
  ],
};

const scheduleMap: ScheduleMap = {
  normal: "8:30-19:00",
  saturday: "13:00-16:00",
  closed: "休館",
  to17: "8:30-17:00",
  to15: "8:30-15:00",
  t1519: "15:00-19:00",
  t1517: "15:00-17:00",
  long: "8:30-20:00",
};

const librarySchedule = () => {
  const [todaySchedule, setTodaySchedule] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDate(); // 1〜31
    const key = scheduleData.data[day - 1] || "closed";
    setTodaySchedule(scheduleMap[key] || "休館");
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.backgroundImage}>
        <img
          src="/images/book.png"
          alt="図書館の背景画像"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.header}>
        <h3>今日の図書館の営業時間📖</h3>
      </div>
      <span className={styles.openingHours}>
        <h4>{todaySchedule}</h4>
      </span>
    </div>
  );
};

export default librarySchedule;
