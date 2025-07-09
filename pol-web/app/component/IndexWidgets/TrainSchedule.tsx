"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Widgets.module.scss";
import { FaSearch } from "react-icons/fa";

type Train = {
  hour: number;
  minute: number;
  destination: string;
  ra: boolean;
  minutesLeft?: number;
};

type Timetable = {
  [key: string]: Train[];
};

const getNextTrain = (timetable: Timetable, station: string) => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const trains = timetable[station] || [];
  const next = trains.find(
    (train) => train.hour * 60 + train.minute >= currentMinutes
  );
  if (!next) return null;
  const minutesLeft = next.hour * 60 + next.minute - currentMinutes;
  return { ...next, minutesLeft };
};

const stations = [
  { key: "kanazawa", label: "金沢" },
  { key: "toyama", label: "富山" },
];

const TrainSchedule = () => {
  const [timetable, setTimetable] = useState<Timetable | null>(null);
  const [nextTrain, setNextTrain] = useState<Train | null>(null);
  const [station, setStation] = useState<string>("kanazawa");

  // LocalStorageから駅の設定を読み込み
  useEffect(() => {
    const savedStation = localStorage.getItem("selectedStation");
    if (
      savedStation &&
      (savedStation === "kanazawa" || savedStation === "toyama")
    ) {
      setStation(savedStation);
    }
  }, []);

  useEffect(() => {
    fetch("/data/timetable.json")
      .then((res) => res.json())
      .then((data) => {
        setTimetable(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (timetable) {
      const next = getNextTrain(timetable, station);
      setNextTrain(next || null);
    }
  }, [timetable, station]);

  const handleToggle = () => {
    const newStation = station === "kanazawa" ? "toyama" : "kanazawa";
    setStation(newStation);
    // LocalStorageに保存
    localStorage.setItem("selectedStation", newStation);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.line_train}> </div>
        <div className={styles.cardHeader}>
          <h3>あいの風とやま鉄道線</h3>
          <h4> {stations.find((s) => s.key === station)?.label}方面</h4>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className={styles.toggleButton}
        aria-label="駅を切り替え"
      >
        ⇔
      </button>
      {nextTrain ? (
        <div className={styles.departureBoard}>
          <span className={styles.trainTime}>
            <div className={styles.left}>
              <div className={styles.time}>
                {nextTrain.hour.toString().padStart(2, "0")}:
                {nextTrain.minute.toString().padStart(2, "0")}
              </div>
              <div className={styles.destination}>
                <span>{nextTrain.destination}行き</span>
              </div>
            </div>
            <div>
              <div className={styles.right}>
                <span className={styles.trainType}>
                  {nextTrain.ra ? (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      快速
                    </span>
                  ) : (
                    "普通"
                  )}
                </span>
              </div>
            </div>
          </span>
          <div className={styles.minutesParent} style={{ textAlign: "right" }}>
            <span className={styles.minutesLeft}>
              {nextTrain.minutesLeft?.toString()}
              <span className={styles.hungo}>分後</span>
            </span>
          </div>
        </div>
      ) : (
        <div>読込中...</div>
      )}
    </div>
  );
};

export default TrainSchedule;
