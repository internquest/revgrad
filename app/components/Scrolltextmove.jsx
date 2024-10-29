import React from 'react'

const Scrolltextmove = () => {
    return (
        <div className="flex text-white m-0 w-screen min-h-screen ">

            <div className="flex items-stretch t690:w-[50%] relative">


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
                </div>
            </div>


            <div className="flex items-stretch t690:w-[50%]  relative">
                <div className="flex justify-end flex-grow flex-col w-full relative">
                    <div className="">
                        <div className="py-[80px] bg-[#1c1c1c] relative">
                            <div></div>
                        </div>
                        <div className="relative min-w-[125%] left-[-25%]">

                            <div className="flex z-[10] w-auto relative ">
                                <div className="w-full relative block ">
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
                                                        <span className="relative inline-block leading-[1.2]">strategic</span>
                                                    </span>{' '}
                                                    <span>
                                                        <span className="relative inline-block leading-[1.2]">creative</span>
                                                    </span>{' '}
                                                    <span>
                                                        <span className="relative inline-block leading-[1.2]">studio</span>
                                                    </span>{' '}
                                                    <span>
                                                        <span className="relative inline-block leading-[1.2]">focused</span>
                                                    </span>{' '}
                                                    <span>
                                                        <span className="relative inline-block leading-[1.2]">on</span>
                                                    </span>{' '}
                                                    <span>
                                                        <span className="relative inline-block leading-[1.2]">impact</span>
                                                    </span>
                                                </h2>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>




                        <div className="relative min-w-[150%] left-[-50%]">
                            <div className="flex z-[10] w-auto relative ">
                                <div style={{}} className="relative block w-full">
                                    <div className="pr-[25px] pl-[25px] pb-[50px] pt-[50px] relative ">
                                        <div className="pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] block transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] ">
                                            <div className="bg-[#1c1c1c] pointer-events-none absolute z-[-1] h-full w-full top-0 left-0 content-[''] transition-[background-color_.45s_cubic-bezier(.25,1,.33,1),opacity_.45s_cubic-bezier(.25,1,.33,1)] block "></div>
                                        </div>

                                        <div>
                                            <div className="inline-block whitespace-nowrap text-[183.077px] ">
                                                <h1 className="text-[#fbe4ce] leading-[1]  uppercase tracking-[1px] font-semibold font-[inherit]">
                                                    <span className="leading-[1] relative inline-block overflow-hidden">
                                                        <span className="relative inline-block leading-[1] ">
                                                            make
                                                        </span>
                                                    </span>{' '}
                                                    <span className="leading-[1] relative inline-block overflow-hidden">
                                                        <span className="relative inline-block leading-[1] ">
                                                            the
                                                        </span>
                                                    </span>{' '}
                                                    <span className="leading-[1] relative inline-block overflow-hidden">
                                                        <span className="relative inline-block leading-[1] ">
                                                            future
                                                        </span>
                                                    </span>
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
    )
}

export default Scrolltextmove
