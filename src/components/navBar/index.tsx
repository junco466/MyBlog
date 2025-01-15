import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/legacy/image'
import AuthLinks from '../authLinks'
import ThemeToggle from '../themeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.svg" alt='facebook' width={24} height={24}/>
        <Image src='/instagram.png' alt='instagram' width={24} height={24}/>
        <Image src='/youtube.png' alt='youtube' width={24} height={24}/>
        <Image src='/linkedin.svg' alt='youtube' width={24} height={24}/>
      </div>
      <div className={styles.logo}>MyBlog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar;