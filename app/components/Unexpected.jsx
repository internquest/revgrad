import React from 'react'

const Unexpected = () => {
    return (
        <div className='flex flex-col items-center px-2 max-w-[1400px] mx-auto font-satoshimed gap-10 mt-20'>

            <h2 className='text-[#ff5046] font-satoshimed t809:text-[20px] text-[22px] leading-[1.5] mx-auto'>Then comes that unexpected email...</h2>

            <div className='border-4 border-[#131718]/[.9] bg-white t809:p-4 p-10 t809:pr-4 pr-24 max-w-[1000px] '>

                <h2 className='text-[28px] leading-[2] text-[#131718]/[.8] tracking-[.02em] text-['>Due to unprecedented circumstances, we regret to inform you
                    that your offer stands withdrawn...</h2>
            </div>
            <div className='border-4 border-[#131718]/[.9] bg-white t809:p-4 p-10 pr-18 max-w-[1000px] '>

                <h2 className='text-[28px] leading-[2] text-[#131718]/[.8] tracking-[.02em] text-['>We sincerely appreciate your contributions during the internship;
                    however, we regret to communicate that we will not be proceeding
                    with a Pre-Placement Offer for you</h2>
            </div>

        </div>
    )
}

export default Unexpected
