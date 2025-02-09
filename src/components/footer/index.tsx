import React from 'react'
import styles from "./footer.module.css"
import ThemeToggleManual from "../themeToggleManual"

const Footer = () => {
  return (
    <div className={styles.container}>
      Footer
      <ThemeToggleManual/>
      </div>
  )
}

export default Footer;