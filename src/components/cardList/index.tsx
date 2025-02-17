import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination";
import Card from "../card";
// import { Post } from "@/types";
import { Post } from "@prisma/client";

interface CardListProps {
  page: number; // Tipado explícito para 'page'
}

const getData = async (page:number): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetch Categories Failed");
  }

  return res.json();
};

const CardList:React.FC<CardListProps> = async ({ page }) => {
  const data = await getData(page)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((item:Post) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
