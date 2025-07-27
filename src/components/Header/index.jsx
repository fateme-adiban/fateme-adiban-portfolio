"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./style.module.css"
import Nav from "./nav"
import Rounded from "../../common/RoundedButton"
import Magnetic from "../../common/Magnetic"

export default function index() {
  const header = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const button = useRef(null)

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" })
        },
        onEnterBack: () => {
          gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false))
        }
      }
    })
  }, [])

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.fateme}>Fateme</p>
            <p className={styles.adiban}>Adiban</p>
          </div>
        </div>

        <p className="hidden xl:block absolute top-[50px] left-[75%] text-[#5C5955] pointer-events-none">AVAILABLE FOR WORK</p>

        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a
                href="#about"
                onClick={e => {
                  e.preventDefault()
                  const about = document.querySelector("#about")
                  if (about) {
                    const y = about.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                About
              </a>
            </div>
          </Magnetic>

          <Magnetic>
            <div className={styles.el}>
              <a
                href="#services"
                onClick={e => {
                  e.preventDefault()
                  const services = document.querySelector("#services")
                  if (services) {
                    const y = services.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                Services
              </a>
            </div>
          </Magnetic>

          <Magnetic>
            <div className={styles.el}>
              <a
                href="#works"
                onClick={e => {
                  e.preventDefault()
                  const works = document.querySelector("#works")
                  if (works) {
                    const y = works.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                Works
              </a>
            </div>
          </Magnetic>

          <Magnetic>
            <div className={styles.el}>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault()
                  const contact = document.querySelector("#contact")
                  const offset = 500
                  if (contact) {
                    const y = contact.getBoundingClientRect().top + window.pageYOffset + offset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
              >
                Contact
              </a>
            </div>
          </Magnetic>
        </div>
      </div>

      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          backgroundColor="#bec0ae"
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={`${styles.button}`}
        >
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  )
}
