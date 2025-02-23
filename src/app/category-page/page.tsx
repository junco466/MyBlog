import CardList from "@/components/cardList"
import styles from "./categoryPage.module.css"
import Menu from "@/components/menu"
import { HomeProps } from "@/types"

export default async function CategoryPage({searchParams}:HomeProps) {
  
  const params = await searchParams
  const page = Number(params.page) || 1;
  const {cat} = params
  
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    </div>
  )
}
