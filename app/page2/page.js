"use client";
import { useGlobalState } from "@/context/GlobalContext";
import FDUC from "@/helpers/FDUC";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../page.module.css"

const page = () => {
  const { data, updateData } = useGlobalState();

  useEffect(() => {
    (async () => {
      const APIData = await FDUC();
      console.log(APIData);
      updateData(APIData);
    })();
  }, []);

  return data.articles ? (
    <div style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
      <div className={styles.articles}>
        {data?.articles?.map((article) => {
          return (
            <div key={article.id} className={styles.article}>
              <h1 className={styles.title}>{article.title}</h1>
              <p className={styles.content}>{article.content}</p>
              <small className={styles.author}>{article.author}</small>
            </div>
          );
        })}
      </div>
      <Link href="/" className={styles.link2}>Back to home</Link>
    </div>
  ) : (
    <div className={styles.loading}>
      <h1 className={styles.loadingText}>Loading...</h1>
    </div>
  );
};

export default page;
