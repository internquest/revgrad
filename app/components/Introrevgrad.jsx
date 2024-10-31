import React from 'react'

const Introrevgrad = () => {
    return (
        <div className='max-w-[1400px] mx-auto w-full'>


            <div className='flex t809:flex-col border-black border-[3px]'>
                <div className='flex-grow basis-0 bg-[#ff5046] flex py-4 px-2 items-center justify-center flex-col h-[694px]'>
                    <p className='font-neuton text-[32px] leading-[2] tracking-[.02em] text-[#f3f4fb]/[.9]'>Introducing</p>
                    <h1 className='font-instrumentserif t809:text-[90px] b81t1199:text-[100px] text-[160px] leading-[1.7] tracking-[.01em] '>RevGrad</h1>
                </div>
                <div className='flex-grow basis-0 bg-white py-4 px-2 flex flex-col justify-center  items-center'>
                    <p className='font-satoshimed text-[20px] leading-[2] tracking-[.02em] t809:mx-2 b81t1199:mx-8 mx-16 text-center text-[#1f232e]/[.9]'>A radical setback platform empowering new grads
                        with AI powered interview lines aimed at setting up
                        interview calls within 24 hrs if your offers get revoked
                        or internships don’t lead to full-time offers</p>
                </div>
            </div>
            <div className='t809:text-[40px] px-2 b81t1199:text-[64px] text-[96px] text-white bg-black flex justify-center leading-[1.5] tracking-[.02em] font-instrumentserif py-5'>
                The RevGrad advantage
            </div>
            <div className='flex t809:flex-col t809:items-center '>
                <div className='bg-[#99A1E1] basis-[60%] py-4 h-[372px] t809:pl-10 pl-20 pr-5 font-satoshimed flex items-center'>

                    <ul className='list-disc text-[#27272a] text-[22px] leading-[2] tracking-[.01em] '>
                        <li>
                            Skip the application black hole
                        </li>
                        <li>
                            Bypass resume screening
                        </li>
                        <li>
                            Jump straight to interviews
                        </li>
                        <li>
                            Focus on preparation, not applications
                        </li>

                    </ul>
                </div>
                <div className='bg-[#6F7BD4] basis-[40%] h-[372px] t809:py-4 pl-10 t809:pr-8 t809:gap-8 b81t1199:pr-16 pr-32 font-satoshimed flex justify-center gap-14 flex-col items-center'>

                    <h2 className=' b81t1199:text-[32px] text-[48px] tracking-[.01em] font-neuton font-bold leading-[1.3] text-[#27272a] '>New grad offer revoked??</h2>
                    <p className='text-[24px] leading-[2] tracking-[.01em] text-[#1f232e]/[.9]'>Why waste time applying when you can...</p>
                </div>
            </div>
        </div>
    )
}

export default Introrevgrad
