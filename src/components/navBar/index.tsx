import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import AuthLinks from '../authLinks'
import ModeToggle from '../themeToggle'
import { Icons1 } from '../icons'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>

        {Icons1.facebook}
        {Icons1.instagram}
        {Icons1.linkedin}
        {Icons1.youtube}

        {/* <Icons.facebook/>
        <Icons.instagram/>
        <Icons.linkedin/>
        <Icons.youtube/> */}
        
      </div>
      <div className={styles.logo}>MyBlog</div>
      <div className={styles.links}>
        <ModeToggle/>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar;