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
        <Icons1.linkedin/>
        {Icons1.youtube}
      </div>
      <div className={styles.logo}>MyBlog</div>
      <div className={styles.links}>
        <ModeToggle/>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar;