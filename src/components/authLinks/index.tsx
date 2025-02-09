"use client"
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {

  const [open, Setopen] = useState(false);
  //temporary
  const status = "notauthenticated"
  return (
    <>
    {
      status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ):(
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
        </>
      )
    }

    <div className={styles.burger}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    </>
  );
};

export default AuthLinks;
