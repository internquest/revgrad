'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';



// export function usePageTransition() {

//     const router = useRouter()
//     const [isTransitioning, setIsTransitioning] = useState(false)

//     const navigateWithTransition = useCallback(async (href) => {
//         // Start transition
//         setIsTransitioning(true)

//         // Wait for transition to complete
//         await new Promise(resolve => setTimeout(resolve, 800))

//         // Navigate
//         router.push(href)
//     }, [router])

//     return { isTransitioning, navigateWithTransition }
// }


const Loading = ({ children }) => {
    // const [href, sethref] = useState('/')
    // const { isTransitioning } = usePageTransition()

    return (
        <>
            {children}
            <div className={` bg-transparent z-[1000] ${'animate-enter'}   fixed top-0 left-0 w-screen h-screen pointer-events-none  `}>
                <motion.div className={`origin-bottom  ${'animate-slideout [animation-delay:300ms]'}  bg-black absolute top-0 left-[0%] w-[25%]  h-full`}></motion.div>
                <motion.div className={`origin-bottom ${'animate-slideout [animation-delay:200ms]'}  bg-black absolute top-0 left-[25%] w-[25%]  h-full`}></motion.div>
                <motion.div className={`origin-bottom ${'animate-slideout [animation-delay:100ms]'}  bg-black absolute top-0 left-[50%] w-[25%]  h-full`}></motion.div>
                <motion.div className={`origin-bottom ${'animate-slideout [animation-delay:0ms]'}  bg-black absolute top-0 left-[70%] w-[25%]  h-full`}></motion.div>


            </div>
        </>

    )
}

export default Loading
