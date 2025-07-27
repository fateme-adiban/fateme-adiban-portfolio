import React, { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideUp } from "./animation"
import Rounded from "../../common/RoundedButton"

const index = () => {
  const phrase1 = "Hi, I'm Fateme, a 21-year-old frontend developer. I help brands and businesses stand out in the digital era."
  const phrase2 = "I don’t just write code, I build visually engaging, user-friendly interfaces that align with your brand and leave lasting impressions."

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section id="about" ref={description} className="about h-screen relative overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="about-text-1">
          <h2 className="text-[60px] 2xl:text-[130px] font-extrabold">ABOUT</h2>

          <p className="text-[20px] sm:text-[25px] xl:text-[40px] font-medium max-w-[80vw] lg:max-w-[450px] xl:max-w-[630px]">
            {phrase1.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
        </div>

        <div className="about-text-2 self-center">
          <p className="text-[20px] sm:text-[25px] font-medium max-w-[80vw] md:max-w-[85vw] lg:max-w-[450px]">
            {phrase2.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
        </div>
      </div>

      <Rounded className="circle" backgroundColor="#76746F">
        <p>About me</p>
      </Rounded>
    </section>
  )
}

export default index
