import React, { useState, useEffect } from "react"
import styles from "./style.module.css"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { menuSlide } from "../animation"
import Link from "./Link"
import Curve from "./Curve"
import Footer from "./Footer"

const navItems = [
  {
    title: "About",
    href: "#about"
  },
  {
    title: "Services",
    href: "#services"
  },
  {
    title: "Works",
    href: "#works"
  }
]

export default function index() {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setVh()
    window.addEventListener("resize", setVh)

    return () => {
      window.removeEventListener("resize", setVh)
    }
  }, [])

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}
