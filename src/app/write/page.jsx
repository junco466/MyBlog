"use client"

import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
// import dynamic from "next/dynamic";
// Carga react-quill solo en el cliente (sin SSR)
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css"
import { useRouter } from "next/navigation";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data, status);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading....</div>;
  }

  return (
    <div className="container">
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell you story... "/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
