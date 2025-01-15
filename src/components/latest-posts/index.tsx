import React from "react";
import styles from "./LatestPosts.module.css";
import { formatDate, getBlogPosts } from "@/app/blog/utlis";
import Link from "next/link";

const LatestPosts = () => {
  let latestPosts = getBlogPosts();
  //console.log(latestPosts);
  return (
    <div className={styles.container}>
      <h1>Recently Published</h1>
      {latestPosts.sort((a,b) => {

        if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
          return -1;
        }
        return 1;
      })
      .map((post)=>(
        <article key={post.slug} className="text-wrap max-w-md my-10">
          <Link href={"#"}>
          <h3 className="font-bold py-2 leading-5 hover:text-blue-400">{post.metadata.title}</h3>
          </Link>
          <p className="leading-8 my-5">{post.metadata.summary}</p>
          <p className="text-sm text-muted-foreground">{formatDate(post.metadata.publishedAt)}</p>  
        </article>
      ))}
    </div>
  );
};

export default LatestPosts;
