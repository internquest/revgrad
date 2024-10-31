import React from 'react'

const Highlighter = () => {
    return (
        <div className="">
            <div className="t809:pt-14 t809:pb-8 py-20 px-6 aft750:py-[7rem] aft750:px-[3rem] flex flex-col gap-[2rem] mx-auto  relative">
                <div className="flex flex-col items-center justify-center">
                    <h2 className={`text-[48px] aft750:text-[72px] text-[#27272a] font-normal tracking-[1.44px] lg:max-w-[48rem] aft750:mr-[2.5rem] font-neuton text-center mb-[2.5rem] leading-[100%] break-words `}>
                        The harsh reality of
                    </h2>
                    <a href="/" className=" flex justify-center items-center bg-[rgb(255,128,102) bg-[#FFA694]  w-[315px] h-[80px] border-black border-2 rotate-[-2.49deg]">
                        <div className="">
                            {/* <div className='border-2 border-black bg-[#FFA694] w-[315px] h-[80px]'> */}
                            <h1 className='text-[#1f232e]/[.9] text-[32px] leading-[1.5]  font-satoshimed'>new grad job offers</h1>
                            {/* </div> */}
                        </div>
                    </a>

                </div>
                <div className="mt-5">
                    <h4 className={`text-[20px] aft750:text-[24px] text-[#27272a] font-medium font-satoshimed tracking-[1.44px] leading-[1.7] text-center break-words `}>( An Honest Reality Check )</h4>
                </div>
            </div>
        </div>
    )
}

export default Highlighter
