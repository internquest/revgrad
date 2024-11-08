'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';


const Loading = ({ children }) => {
    const [transitionstate, setTransitionstate] = useState('');
    const pathname = usePathname()
    useEffect(() => {
        // Trigger exit animation on path change
        setTransitionstate(false);

        const timeout = setTimeout(() => {
            // After exit animation completes, set entry animation for the new page
            setTransitionstate(true);
        }, 800); // Match this timeout to the transition duration in CSS (0.5s here)

        return () => clearTimeout(timeout); // Clear timeout on component unmount
    }, [pathname]);


    return (
        <>
            {children}
            <div key={pathname} className={` bg-transparent z-[1000] ${transitionstate ? 'animate-enter' : 'animate-enter'}  fixed top-0 left-0 w-screen h-screen pointer-events-none  `}>
                <motion.div className={`origin-bottom ${transitionstate ? 'animate-slideout [animation-delay:300ms]' : 'animate-slideout [animation-delay:300ms]'}  bg-black absolute top-0 left-[0%] w-[25%]  h-full`}></motion.div>
                <motion.div className={`origin-bottom ${transitionstate ? 'animate-slideout [animation-delay:200ms]' : 'animate-slideout [animation-delay:200ms]'}  bg-black absolute top-0 left-[25%] w-[25%]  h-full`}></motion.div>
                <motion.div className={`origin-bottom ${transitionstate ? 'animate-slideout [animation-delay:100ms]' : 'animate-slideout [animation-delay:100ms]'}  bg-black absolute top-0 left-[50%] w-[25%]  h-full`}></motion.div>
                <motion.div className={`origin-bottom ${transitionstate ? 'animate-slideout [animation-delay:0ms]' : 'animate-slideout [animation-delay:0ms]'}  bg-black absolute top-0 left-[70%] w-[25%]  h-full`}></motion.div>


            </div>
        </>

    )
}

export default Loading
