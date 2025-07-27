import styles from "./style.module.css"
import Image from "next/image"
import Rounded from "../../common/RoundedButton"
import { useRef } from "react"
import { useScroll, motion, useTransform, useSpring } from "framer-motion"
import Magnetic from "../../common/Magnetic"

export default function index() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact} id="contact">
      <div className={styles.body}>
        <div className={styles.title}>
          <div className="flex flex-col leading-[300%] lg:leading-30">
            <span className="font-medium text-[20px] lg:text-[40px] text-center">Let’s work together</span>
            <h2 className="font-extrabold text-[60px] lg:text-[100px] leading-[100%] 2xl:text-[150px] text-center">GET IN TOUCH</h2>
          </div>

          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor="#76746F" className={styles.button}>
              <p className="font-medium text-[15px] md:text-[25px] 2xl:text-[30px]">Get In Touch</p>
            </Rounded>
          </motion.div>
        </div>

        <div className={styles.nav}>
          <Rounded backgroundColor={"#76746F"}>
            <p onClick={() => (window.location.href = "mailto:f.adiban.rad@gmail.com")} className="font-medium text-[16px] md:text-[25px]">
              f.adiban.rad@gmail.com
            </p>
          </Rounded>
          <Rounded backgroundColor={"#76746F"}>
            <p className="font-medium text-[16px] md:text-[25px]">+989900170544</p>
          </Rounded>
        </div>

        <div className={styles.info}>
          <div>
            <h3>
              © 2025 <br />
              FATEME ADIBAN
            </h3>
          </div>

          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <p onClick={() => (window.location.href = "https://www.linkedin.com/in/fateme-adiban")}>LinkedIn</p>
              </Magnetic>
            </span>

            <Magnetic>
              <p onClick={() => (window.location.href = "https://github.com/fateme-adiban")}>Github</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
