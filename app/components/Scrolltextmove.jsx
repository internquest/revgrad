'use client'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'

const Scrolltextmove = () => {

    const [transformvalue, setTransformvalue] = useState(0)
    const scrollcontainertext = useRef(null)

    const { scrollYProgress } = useScroll({
        target: scrollcontainertext,
        offset: ['start start', '.9 start']
    })

    const transformvaluechange = useTransform(scrollYProgress, [0, 1], ['0', '25'])

    useMotionValueEvent(transformvaluechange, 'change', (value) => {
        setTransformvalue(value)
    })
    return (
        <>
            <div ref={scrollcontainertext} className=" t999:flex overflow-hidden a690:flex flex flex-wrap relative z-[10]  text-white m-0  w-auto  ">

                <div className="flex items-stretch flex-wrap t690:w-full  a690:w-[50%] 69210:!w-full  relative">


                    <div className="flex justify-end flex-grow flex-col w-full relative">
                        <div className="z-[-1] overflow-hidden w-full h-full absolute top-0 left-0">
                            <div className="z-[1] overflow-hidden w-full h-full absolute top-0 left-0 transition-transform duration-[8s] ease-[cubic-bezier(.1,.2,.7,1)]  ">
                                <div className=" heroleftbg h-full bg-center bg-cover transition-opacity duration-[.4s] delay-100 overflow-hidden w-full absolute left-0 z-[1]  bottom-0 top-auto">

                                </div>
                            </div>

                        </div>
                        <div className="pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] block transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)]">

                            <div className="absolute z-0 top-0 left-0 content-[''] block h-full w-full pointer-events-none bg-black/[.5]"></div>
                        </div>
                        <div className=''>
                            <div className=''>
                                <div className='t999:h-[450px] h-screen'></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-stretch t690:w-full a690:w-[50%] 69210:!w-full  relative">
                    <div className="flex justify-end flex-grow flex-col w-full relative">
                        <div className="">
                            <div className="t999:py-[25px] py-[80px] bg-[#1c1c1c] relative">
                                <div></div>
                            </div>
                            <div className="relative min-w-[125%] left-[-25%]">

                                <div className="flex z-[10] w-auto relative ">
                                    <div style={{ transform: `translateX(${transformvalue * 2}%)` }} className="w-full relative block t999:hidden ">
                                        <div className="pr-[25px] pb-[50px] pt-[50px] pl-[25%] relative">
                                            <div className="pointer-events-none absolute w-full h-full z-[-1] top-0 left-0 content-[''] block transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)]">
                                                <div className="bg-[#1c1c1c] pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] block "></div>
                                            </div>

                                            <div>
                                                <div className="text-[max(60px,4vw)]  leading-[1.2] ">
                                                    <h2 className="text-[#fbe4ce] leading-[1.2] tracking-[-.03em] font-medium">
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">A</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">Your</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">graduating</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">class</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">deserves</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">better</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">than</span>
                                                        </span>
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">revoked</span>
                                                        </span>
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]"></span>offers
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="w-full relative block a999:hidden ">
                                        <div className="pr-[25px] pb-[50px] pt-[50px] pl-[25%] relative">
                                            <div className="pointer-events-none absolute w-full h-full z-[-1] top-0 left-0 content-[''] block transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)]">
                                                <div className="bg-[#1c1c1c] pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] block "></div>
                                            </div>

                                            <div>
                                                <div className="text-[max(60px,4vw)]  leading-[1.2] ">
                                                    <h2 className="text-[#fbe4ce] leading-[1.2] tracking-[-.03em] font-medium">
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">A</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">Your</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">graduating</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">class</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">deserves</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">better</span>
                                                        </span>{' '}
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">than</span>
                                                        </span>
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]">revoked</span>
                                                        </span>
                                                        <span>
                                                            <span className="relative inline-block leading-[1.2]"></span>offers
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>




                            <div className="relative min-w-[150%] t999:left-0 left-[-50%]">
                                <div className="flex z-[10] w-auto relative ">
                                    <div className="relative t999:block hidden w-full">
                                        <div className="pr-[25px] pl-[25px] pb-[50px] pt-[50px] relative ">
                                            <div className="pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] block transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] ">
                                                <div className="bg-[#1c1c1c] pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] block "></div>
                                            </div>

                                            <div>
                                                <div className="inline-block whitespace-nowrap t999:text-[40px] text-[93.077px] ">
                                                    <h1 className="text-[#fbe4ce] leading-[1]  uppercase tracking-[1px] font-semibold font-[inherit]">
                                                        <span className="leading-[1] relative inline-block overflow-hidden">
                                                            <span className="relative inline-block leading-[1] ">
                                                                INTERVIEW
                                                            </span>
                                                        </span>{' '}
                                                        <span className="leading-[1] relative inline-block overflow-hidden">
                                                            <span className="relative inline-block leading-[1] ">
                                                                LIFELINE
                                                            </span>
                                                        </span>
                                                        {/* <span className="leading-[1] relative inline-block overflow-hidden">
                                                            <span className="relative inline-block leading-[1] ">
                                                                future
                                                            </span>
                                                        </span> */}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ transform: `translateX(${transformvalue * 3.5}%)` }} className="relative block w-full t999:hidden">
                                        <div className="pr-[25px] pl-[25px] pb-[50px] pt-[50px] relative ">
                                            <div className="pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] block transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] ">
                                                <div className="bg-[#1c1c1c] pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] block "></div>
                                            </div>

                                            <div>
                                                <div className="inline-block whitespace-nowrap t999:!text-[40px] text-[93.077px] ">
                                                    <h1 className="text-[#fbe4ce] leading-[1]  uppercase tracking-[1px] font-semibold font-[inherit]">
                                                        <span className="leading-[1] relative inline-block overflow-hidden">
                                                            <span className="relative inline-block leading-[1] ">
                                                                INTERVIEW
                                                            </span>
                                                        </span>{' '}
                                                        <span className="leading-[1] relative inline-block overflow-hidden">
                                                            <span className="relative inline-block leading-[1] ">
                                                                LIFELINE
                                                            </span>
                                                        </span>{' '}

                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Scrolltextmove
