import React from "react"

const index = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden flex items-center justify-center">
      <img src="./hero-img.svg" alt="Hero" className="w-full max-w-4xl object-contain" />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-40">
        <h1 className="text-[40px] sm:text-[10vw] 2xl:text-[150px] font-extrabold leading-[100%] tracking-tight text-center">
          <span className="block">HI THERE, I’M</span>
          <span>FATEME ADIBAN.</span>
        </h1>
        <h2 className="hero-h2 text-[18px] xl:text-[28px] font-medium tracking-tight text-center max-w-[300px] xl:max-w-[560px] mt-20">Freelance frontend developer & web designer based in Qom, Iran.</h2>
      </div>
    </section>
  )
}

export default index
