"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import logo from "../../images/logo.png"
import ThemChanger from '@/Providers/Tehme/ThemChanger'
import User from '../User/User'
import { motion } from 'framer-motion'
const Header = () => {
 const router = useRouter()
  return <>
<div className='w-full '>
  <div className='flex items-center dark:bg-[#171717] pl-[50px] md:pl-[73px]   justify-between bg-white px-5 py-3'>
    <div>
<motion.div
 initial={{scale:0.5}}
 transition={{
     duration:0.7,
     type:"tween"
 }}
 whileInView={{
     scale:1
 }}
>
<a

href='/' onClick={()=>{router.refresh()}}>
<Image src={logo} className='md:w-[45px] mt-[10px] mx-auto w-[35px] h-[35px]  md:h-[45px] ' alt='img'/>
</a>
</motion.div>
    </div>
    <ul className='flex items-center gap-2'>
      <motion.li
       initial={{scale:0.5}}
                transition={{
                    duration:0.7,
                    type:"tween"
                }}
                whileInView={{
                    scale:1
                }}
      ><ThemChanger/></motion.li>
   
    
          <motion.li
           initial={{scale:0.5}}
                transition={{
                    duration:0.7,
                    type:"tween"
                }}
                whileInView={{
                    scale:1
                }}
          >
            <User />
          </motion.li>
    </ul>
  </div>
</div>

  </>
}

export default Header