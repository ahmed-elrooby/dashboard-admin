"use client"
import React from 'react'
import TableOfOrders from './TableOfOrders'
import { motion } from 'framer-motion'
const Order = () => {
  return <>
    <div className='p-2 w-[95%] mx-auto'>
      <div className='flex gap-1 md:flex-row flex-col justify-between items-start md:items-center'>
<motion.div
 initial={{scale:0.5}}
 transition={{
     duration:0.7,
     type:"tween"
 }}
 whileInView={{
     scale:1
 }}
className='flex flex-col gap-2 items-start'>
<h1 className='btn'>orders </h1>
<span className='text-gray-400'>Let’s check your update today</span>
</motion.div>

       </div>

       <TableOfOrders />
       
      </div>

       
  
  </>
}

export default Order