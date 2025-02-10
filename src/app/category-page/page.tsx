import CardList from "@/components/cardList"
import styles from "./categoryPage.module.css"
import Menu from "@/components/menu"

export default function CategoryPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}
