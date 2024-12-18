'use client'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navlinks = () => {
    const path = usePathname()
    // const linkvalues=[
    //     '/','/products','/faq'
    // ]
    // console.log(path);

    const handleclick = (e, href) => {
        if (path === href) {
            // console.log(href);

            // Prevent navigation if the link points to the current path
            e.preventDefault();
        }
    }

    return (
        <nav className='hidden aft990:flex aft990:items-center aft990:h-full aft990:justify-center '>
            <ul className='h-full items-center flex flex-wrap list-none p-0 m-0'>
                <li className='h-full '>
                    <a href="/" onClick={(e) => handleclick(e, '/')} className='group flex items-center lg-menu-item'>
                        <span className={`${path === '/' ? 'border-black border-l-4 border-solid text-white bg-[#647bd4]  ' : 'group-hover:text-[#6f7bd4] group-hover:underline'} px-[2rem] 'border-black  h-full flex items-center border-solid text-[20px] font-semibold uppercase [text-underline-offset:.3rem] transition-[text-decoration] duration-100 font-neuton `}>
                            Home
                        </span>
                    </a>
                </li>
                <li className='h-full '>
                    <a href="/products" onClick={(e) => handleclick(e, '/products')} className=' group border-black !border-l-4 !border-r-4  !border-solid flex items-center hover:text-[#6f7bd4] lg-menu-item'>
                        <span className={`${path === '/products' ? ' text-white bg-[#647bd4] h-full flex items-center ' : 'group-hover:underline'} px-[2rem] text-[20px]  font-semibold  uppercase [text-underline-offset:.3rem] transition-[text-decoration] duration-100  font-neuton `}>
                            PRODUct
                        </span>
                    </a>
                </li>
                <li className='h-full '>
                    <a href="/faq" onClick={(e) => handleclick(e, '/faq')} className='group flex items-center h-full  lg-menu-item'>
                        <span className={`${path === '/faq' ? ' text-white bg-[#647bd4] h-full flex items-center ' : 'group-hover:underline group-hover:text-[#6f7bd4]'} px-[2rem] text-[20px] font-semibold  uppercase [text-underline-offset:.3rem] transition-[text-decoration] duration-100  font-neuton `}>
                            FAq
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navlinks