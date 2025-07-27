import React, { useRef } from "react"
import Image from "next/image"
import { motion, useTransform, useScroll } from "framer-motion"

const index = () => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <section id="works" ref={container} className="works relative overflow-hidden min-h-[200vh] bg-[#393632] z-2">
      <div className="services-text">
        <h2 className="font-extrabold leading-[100%] text-[58px] 2xl:text-[130px] text-[#e6e6e1]">SELECTED WORK</h2>
        <div className="flex flex-col xl:flex-row gap-30">
          <div className="flex flex-col">
            <div className="big-frame">
              <Image src="/work-1.png" width={721} height={758} alt="first work's frame" className="rounded-[20px] w-full h-full object-cover brightness-80" />
              <video src="/videos/1.mp4" autoPlay muted loop />
            </div>
            <div className="content">
              <p className="big-title">Elodi & Alexandre</p>
              <div className="flex gap-1">
                <p className="tag">Design</p>
                <p className="tag">Development</p>
                <p className="tag">2025</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:self-center">
            <div className="small-frame">
              <Image src="/work-2.png" width={530} height={534} alt="second work's frame" className="rounded-[20px] w-full h-full object-cover brightness-80" />
              <video src="/videos/2.mp4" autoPlay muted loop />
            </div>
            <div className="content plannorium">
              <p className="small-title">Plannorium</p>
              <div className="flex gap-1">
                <p className="tag-sm">Design</p>
                <p className="tag-sm">Development</p>
                <p className="tag-sm">2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-30 second-row">
          <div className="flex flex-col xl:self-center">
            <div className="small-frame">
              <Image src="/work-3.png" width={530} height={534} alt="second work's frame" className="rounded-[20px] w-full h-full object-cover brightness-80" />
              <video src="/videos/3.mp4" autoPlay muted loop />
            </div>
            <div className="content">
              <p className="small-title">Alexandre</p>
              <div className="flex gap-1">
                <p className="tag-sm">Design</p>
                <p className="tag-sm">Development</p>
                <p className="tag-sm">2025</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="big-frame">
              <Image src="/work-4.png" width={721} height={758} alt="first work's frame" className="rounded-[20px] w-full h-full object-cover brightness-80" />
              <video src="/videos/4.mp4" autoPlay muted loop />
            </div>
            <div className="content">
              <p className="big-title">Seehawk</p>
              <div className="flex gap-1">
                <p className="tag">Design</p>
                <p className="tag">Development</p>
                <p className="tag">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div style={{ height }} className="circleContainer">
        <div className="circle-works"></div>
      </motion.div>
    </section>
  )
}

export default index
