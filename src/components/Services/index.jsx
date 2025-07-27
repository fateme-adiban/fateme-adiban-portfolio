"use client"
import React, { useState, useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideUp } from "./animation"
import Image from "next/image"

const Index = () => {
  const faqs = [
    {
      title: "Web Development",
      content: "I don’t just build websites, I craft online homes for your brand. Whether you're starting fresh or ready to grow, I will work closely with you to bring your ideas to life."
    },
    {
      title: "Web Design",
      content: "You deserve more than a generic website that looks like everyone else's. I craft designs that are rooted in your story, your voice, your vision."
    },
    {
      title: "SEO",
      content: "With basic SEO, I will take care of the essentials, so your website gets seen by the people who matter most."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = index => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  const phrase = "Empowering brands and businesses with custom web experiences that are memorable and profitable. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape."
  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section id="services" className="services min-h-[180vh] relative overflow-x-hidden bg-[#393632]">
      <div ref={description} className="text-box services-text">
        <h2 className="font-extrabold text-[60px] 2xl:text-[130px] text-[#e6e6e1]">SERVICES</h2>
        <div className="flex flex-col lg:flex-row gap-30">
          <p className="text-[#e6e6e1] text-[20px] sm:text-[25px] 2xl:text-[30px] font-medium max-w-[680px] leading-[150%]">
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
          <Image src="/services-img.png" width={512} height={645} alt="fateme adiban's image" className="rounded-[20px] text-center max-w-[85vw] lg:max-w-[512px]" />
        </div>
      </div>

      <div className="services-text">
        <h2 className="font-extrabold text-[50px] 2xl:text-[100px] text-[#e6e6e1]">WHAT I DO</h2>
        <div className="flex flex-col xl:flex-row gap-30">
          <p className="text-[#e6e6e1] text-[20px] sm:text-[25px] 2xl:text-[30px] font-medium max-w-[400px] sm:max-w-[550px] leading-[150%]">I focus on all things digital and web related. With each of my services, my goal is to deliver an experience that serves a great purpose.</p>
          <div className="menu">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq max-w-[85vw] lg:max-w-[700px] border-b-2 border-[#e6e6e1] cursor-pointer transition-all duration-500 py-4 ${activeIndex === index ? "active" : ""}`} onClick={() => toggle(index)}>
                <div className="flex justify-between items-center gap-20">
                  <h3 className="text-[#e6e6e1] text-[20px] sm:text-[40px] 2xl:text-[65px] font-extrabold">{faq.title}</h3>
                  <Image src="/plus-icon.svg" width={44} height={44} alt="icon" className={`2xl:max-w-[44px] max-w-[30px] transition-transform duration-500 ${activeIndex === index ? "rotate-90" : ""}`} />
                </div>
                <div
                  className="answer overflow-hidden transition-[max-height] duration-[1400ms] ease-in-out"
                  style={{
                    maxHeight: activeIndex === index ? "300px" : "0px",
                    animation: activeIndex === index ? "fade 1s ease-in-out" : "none"
                  }}
                >
                  <p className="text-[#e6e6e1] text-[18px] sm:text-[25px] 2xl:text-[30px] font-medium max-w-[400px] sm:max-w-[550px] leading-[150%]">{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
