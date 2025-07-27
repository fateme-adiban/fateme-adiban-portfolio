"use client"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Lenis from "lenis"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Works from "../components/Works"
import Footer from "../components/Footer"
import Preloader from "../components/Preloader"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = "default"
      window.scrollTo(0, 0)
    }, 2000)
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <Footer />
    </main>
  )
}
