import Link from "next/link"
import styles from "./style.module.css"

export default function index() {
  return (
    <div className={styles.footer}>
      <Link href="https://www.linkedin.com/in/fateme-adiban">LinkedIn</Link>
      <Link href="https://github.com/fateme-adiban">Github</Link>
    </div>
  )
}
