"use client"
import Link from 'next/link'
import React from 'react'
import TableOfProducts from './TableOfProducts';

import { motion } from 'framer-motion';
const Product = () => {
  
  
  return (
    <>
      <div className='p-2 w-[95%] mx-auto'>
      <div className='flex gap-1 md:flex-row flex-col justify-between items-center '>
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
<h1 className='btn'>products </h1>
<span className='text-gray-400'>Let’s check your update today</span>

</motion.div>
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
<Link href="AddProduct" className='btn-primary w-full text-center md:w-fit'>add new products</Link>

</motion.div>

       </div>

           <TableOfProducts />
      </div>
    </>
  );
}

export default Product;
