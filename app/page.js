import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.helloWord}>Welcome! This is the home page... </h1>
      <Link href="/page2" className={styles.link}>visit the Blog!</Link>
    </main>
  );
}
