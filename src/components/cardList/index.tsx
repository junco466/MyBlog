import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination";
import Card from "../card";
// import { Post } from "@/types";
import { Post } from "@prisma/client";

interface CardListProps {
  page: number; // Tipado explícito para 'page'
}

const getData = async (page:number): Promise<{posts: Post[]; count: number}> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetch Categories Failed");
  }

  return res.json();
};

const CardList:React.FC<CardListProps> = async ({ page }) => {
  const {posts,count} = await getData(page)

  const POST_PER_PAGE =2;

  const hasPrev = POST_PER_PAGE * (page-1) > 0
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item:Post) => (
          <Card item={item} propKey={item.id} key={item.id}/>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
};

export default CardList;
