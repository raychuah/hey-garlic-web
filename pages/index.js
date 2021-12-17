import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hey Garlic</title>
        <meta name="description" content="Experience creativivity!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hey Garlic</h1>

        <p className={styles.description}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>

        <div className={styles.grid}>
          <Link href="/posts/example1">
            <a className={styles.card}>
              <h2>Post 1 &rarr;</h2>
              <p>This is a test page. Something simple. Need more lines...</p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <h2>Post 2 &rarr;</h2>
              <p>This is a test page. Something simple. Need more lines...</p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <h2>Post 3 &rarr;</h2>
              <p>This is a test page. Something simple. Need more lines...</p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <h2>Post 4 &rarr;</h2>
              <p>This is a test page. Something simple. Need more lines...</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Designed by <code>Hey Garlic</code> @2022
        </p>
        {/* <a href="/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
