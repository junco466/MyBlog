"use client"

import React from 'react'
import styles from "./pagination.module.css"
import { useRouter } from 'next/navigation'

interface paginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination:React.FC<paginationProps> = ({page, hasPrev, hasNext}) => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <button 
      className={styles.button} 
      disabled={!hasPrev}
      onClick={()=> router.push(`?page=${page- 1}`)}
      >
        Previous
      </button>
      <button 
      className={styles.button} 
      onClick={()=> router.push(`?page=${page+ 1}`)}
      disabled={!hasNext}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination;