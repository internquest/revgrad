'use client'

import Hero from "./components/Hero";
import Highlighter from "./components/Highlighter";
import Imagine from "./components/Imagine";
import Scrolltextmove from "./components/Scrolltextmove";
import { useEffect } from "react";
import Unexpected from "./components/Unexpected";
import ConventionalAdvice from "./components/ConventionalAdvice";
import Introrevgrad from "./components/Introrevgrad";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])
  return (
    <>
      <div className="bg-[#1c1c1c] ">

        <Scrolltextmove />
      </div>
      <Hero />
      <Highlighter />
      <Imagine />
      <Unexpected />
      <ConventionalAdvice />
      <div className=' t809:min-h-0 min-h-[546px] w-full bg-[#ffeeeb] p-4 justify-center relative  flex items-center flex-col'>


        <p className='text-[20px] text-center t809:leading-[1.5] my-4 leading-[2] tracking-[.005em] text-[#6f7bd4] max-w-[670px]'>Let's be real, the typical career advice is outdated and, quite frankly,
          unhelpful. The "just keep applying" mantra is a recipe for burnout and
          frustration. Why waste time and energy on endless applications when you
          can be strategic? And networking, while valuable, shouldn't be a panic
          induced spam session.</p>

        <p className=' t809:text-[28px]  b81t1199:text-[32px] t809:mt-4 text-[48px] text-[#6f7bd4] t809:relative absolute bottom-0 tracking-[.005em]  leading-[1.2] '>We believe in a more efficient, less stressful approach</p>

      </div>
      <Introrevgrad />

      <div className="h-[100vh] w-full"></div>

    </>
  );
}
