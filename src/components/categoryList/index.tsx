import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
// import { Category } from "@/types";
import { Category } from "@prisma/client";

const getData = async (): Promise<Category[]> => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetch Categories Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item: Category) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
          >
            {item.img && (
              <div className={styles.imageContainer}>  
              <Image
                src={item.img}
                alt=""
                fill
                sizes="auto"
                className={styles.image}
                />
                </div>
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
