import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/legacy/image'
import AuthLinks from '../authLinks'
import ModeToggle from '../themeToggle'
import { Icons } from '../icons'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Icons.facebook/>
        <Icons.instagram/>
        <Icons.linkedin/>
        <Icons.youtube/>
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