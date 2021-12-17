import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function example() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.description}>
          The world is full of vampires!
        </code>
        <Image src="/vampire.jpg" alt="Vercel Logo" width={360} height={360} />
        <p>
          &rarr;
          <Link href="/">
            <a>back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
