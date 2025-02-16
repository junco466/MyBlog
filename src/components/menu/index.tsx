import React from 'react'
import styles from "./menu.module.css"
import MenuPosts from '../menuPosts';
import MenuCategories from '../menuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}/>

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>categories</h1>
      <MenuCategories/>


      <h2 className={styles.subtitle}>Choosen by editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true}/>

    </div>
  )
}

export default Menu;