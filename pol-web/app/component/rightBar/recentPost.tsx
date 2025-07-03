"use client";

import React, { useState, useEffect } from "react";
import styles from "./RecentPost.module.scss"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons
import Link from "next/link";

interface WebClassItem {
  title: string;
  modified: string;
  id: string;
}

interface RecentPost {
  title: string;
  date: string;
  id: string;
}

export default function RecentPost() {
  const [fetchData, setFetchData] = useState<WebClassItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/webclass")
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data.records);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const recentPosts: RecentPost[] = fetchData.map((item) => ({
    title: item.title,
    date: item.modified,
    id: item.id,
  }));

  if (loading) {
    return <div className={styles.recentPostContainer}>Loading...</div>;
  }

  return (
    <div className={styles.recentPostContainer}>
      <div className={styles.list}>
        {recentPosts.map((post, idx) => (
          <React.Fragment key={idx}>
            <a
              href={`https://tpuwcwebsv.pu-toyama.ac.jp/webclass/informations.php/show?id=${post.id}`}
              className={styles.postLink}
              target="_blank"
            >
              <div className={styles.postItem}>
                <div className={styles.postTitle}>{post.title}</div>
                <div className={styles.postDate}>{post.date}</div>
              </div>
            </a>
            {idx < recentPosts.length - 1 && <hr className={styles.divider} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
