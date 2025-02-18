import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";

interface CardProps {
  item: Post
  propKey: string; 
}

const Card : React.FC<CardProps> = ({item, propKey}) => {
  return (
    <div className={styles.container} key={propKey}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill sizes="auto" className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>`${String(item.createdAt)}` - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi
          voluptates temporibus sint recusandae! Ratione itaque sed consequatur
          eum reiciendis illum, dolores voluptas sapiente quia repellendus animi
          alias cupiditate ab!
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
