import styles from "./homepage.module.css";
import Featured from "@/components/featured";
import CategoryList from "@/components/categoryList";
import CardList from "@/components/cardList";
import Menu from "@/components/menu";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams
  const page = Number(params.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
