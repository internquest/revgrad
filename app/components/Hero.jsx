import React from 'react'

const Hero = () => {
    return (
        <div className='w-full '>
            <div className=' flex flex-col t809:gap-6  gap-10 text-[#1F232E] border-b-[3px] border-t-[3px] border-[#1F232E]/[.9]  max-w-[1280px] items-center t809:px-2 t809:pt-12 px-10 pt-32 mx-auto min-h-[718px] '>
                <h2 className='font-neuton font-normal self-start t809:text-[32px] text-[48px]  leading-[1.3] max-w-[516px] text-balance tracking-[-.005em] '>Times are uncertain but your
                    {' '}<span className='t809:text-[44px] text-[64px] font-extrabold leading-[1] text-[#FF5046]'>future</span> doesn’t have to be!
                </h2>
                <p className='font-satoshimed font-medium t809:text-[20px] text-[22px] leading-[1.9] text-wrap tracking-[.0089em]  max-w-[723px]'>
                    In today's volatile job market, many students who secured on-campus
                    placements are facing the harsh reality of revoked offers or the absence
                    of full-time positions post-internship. At OfferLink, we understand the
                    challenges you might face as a new grad and have created an exclusive platform designed just for you.
                </p>


            </div>
        </div>
    )
}

export default Hero
