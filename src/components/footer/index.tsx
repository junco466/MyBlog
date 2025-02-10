import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { Icons1 } from "../icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="my blog" width={50} height={50} />
          <h1 className={styles.logoText}>MyBlog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos tempore
          voluptate ab. Hic, repellat itaque quod et similique, in ratione odit
          atque reprehenderit autem exercitationem incidunt pariatur, nulla
          esse! Voluptatum.
        </p>
        <div className={styles.icons}>
          {Icons1.facebookSm}
          {Icons1.instagramSm}
          {Icons1.linkedinSm}
          {Icons1.youtubeSm}
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>

        <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Youtube</Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
