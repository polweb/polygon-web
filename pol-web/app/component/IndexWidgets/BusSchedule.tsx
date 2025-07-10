"use client";

import React, { useEffect, useState } from "react";
import styles from "./Widgets.module.scss";

type Bus = {
  bus_number: string;
  is_tue_wed_thu: boolean;
  time: string; // "8:30発"
};

type BusTimetable = {
  campus: Bus[];
  kosugi: Bus[];
};

const stations = [
  { key: "campus", label: "キャンパス" },
  { key: "kosugi", label: "小杉" },
];

function parseTimeToMinutes(time: string) {
  // "8:30発" → 8, 30
  const match = time.match(/(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  return hour * 60 + minute;
}

function getNextBus(buses: Bus[]) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const next = buses
    .map((bus) => {
      const busMinutes = parseTimeToMinutes(bus.time);
      if (busMinutes === null) return null;
      return { ...bus, minutesLeft: busMinutes - currentMinutes, busMinutes };
    })
    .filter((bus) => bus && bus.minutesLeft >= 0)
    .sort((a, b) => a!.busMinutes - b!.busMinutes)[0];
  return next || null;
}

const BusSchedule = () => {
  const [timetable, setTimetable] = useState<BusTimetable | null>(null);
  const [nextBus, setNextBus] = useState<
    (Bus & { minutesLeft: number }) | null
  >(null);
  const [station, setStation] = useState<"campus" | "kosugi">("campus");

  // LocalStorageから停留所の設定を読み込み
  useEffect(() => {
    const savedStation = localStorage.getItem("selectedBusStation");
    if (
      savedStation &&
      (savedStation === "campus" || savedStation === "kosugi")
    ) {
      setStation(savedStation as "campus" | "kosugi");
    }
  }, []);

  useEffect(() => {
    fetch("/data/bustime.json")
      .then((res) => res.json())
      .then((data) => setTimetable(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (timetable) {
      const buses = timetable[station] || [];
      const next = getNextBus(buses);
      setNextBus(next || null);
    }
  }, [timetable, station]);

  const handleToggle = () => {
    const newStation = station === "campus" ? "kosugi" : "campus";
    setStation(newStation);
    // LocalStorageに保存
    localStorage.setItem("selectedBusStation", newStation);
  };
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.line_bus}> </div>
        <div className={styles.cardHeader}>
          <h3>シャトルバス</h3>
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
      {nextBus ? (
        <div className={styles.departureBoard}>
          <span className={styles.trainTime}>
            <div className={styles.left}>
              <div className={styles.time}>{nextBus.time.split("発")[0]}</div>
              <div className={styles.destination}>
                <span>{nextBus.bus_number}</span>
              </div>
            </div>
            <div>
              <div className={styles.right}>
                <span className={styles.trainType}>
                  {nextBus.is_tue_wed_thu ? "◎" : "⚫️"}
                </span>
              </div>
            </div>
          </span>
          <div style={{ textAlign: "right" }}>
            <span className={styles.minutesLeft}>
              {nextBus.minutesLeft?.toString()}
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

export default BusSchedule;
