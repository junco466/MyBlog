import Link from "next/link";
import styles from "./pruebas.module.css"
import LatestPosts from "@/components/latest-posts";

export default function Home() {
  return (
    <div className={styles.container}>
        <LatestPosts/>
    </div>
  );
}
