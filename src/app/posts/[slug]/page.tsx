import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu";
import Comments from "../../../components/comments";
// import { Post, User } from "@prisma/client";
import { PostWithUser } from "@/types";

interface Params {
  params: {
    slug: string;
  };
}

const getData = async (slug: string): Promise<PostWithUser|null> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetch Categories Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }: Params) => {
  const { slug } = await params;

  const data = await getData(slug);
  // console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name || "Unknown"}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
          />
          <div className={styles.comments}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
