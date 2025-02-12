import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu";
import Comments from "../../components/comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}> John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.desc}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ab, id perferendis exercitationem sint animi cum laboriosam, libero accusantium odio a voluptatem incidunt unde doloribus totam in culpa? Nemo, nam?
                </p>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sapiente, maxime esse quas placeat eveniet, eius quibusdam dolore quaerat excepturi sit porro pariatur harum minus ut unde molestiae ratione!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, doloremque illo animi reprehenderit a magnam neque rerum voluptatibus laborum corrupti, praesentium, veritatis provident impedit? Repudiandae nostrum id ducimus ab inventore!
                </p>
            </div>
            <div className={styles.comments}>
                <Comments/>
            </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
