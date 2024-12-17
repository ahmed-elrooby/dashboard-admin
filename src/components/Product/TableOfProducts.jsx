"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { BiSolidMessageAltEdit } from 'react-icons/bi';
import { FaRegImage } from 'react-icons/fa';
import { MdAutoDelete } from 'react-icons/md';
import SkeletonProduct from '../Skeltons/SkeletonProduct/SkeletonProduct';
import { context } from '@/Providers/Context/ContextData';
import axiosInstance from '@/_utils/axiosInstance'
import { FaSpinner } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { motion } from 'framer-motion';
const TableOfProducts = () => {
    const { setProducts,images,products,getAllProducts,loadding,setLoadding } = useContext(context);

    const [query, setQuery] = useState("")


    
  
    useEffect(() => {
      if (query === "") {
        
        getAllProducts();
        return;
      }
  
      const fetchProducts = async () => {
        setLoadding(true)
        try {
          const { data } = await axiosInstance.get(`/api/Product/search?searchTerm=${query}`);
         console.log(data)
          if (data.isSuccess) {
            setProducts(data.data);
          }
        } catch (error) {
          console.log("Error fetching products:");
        }finally{
          setLoadding(false)
        }
      };
  
      fetchProducts();
    }, [query]);
  
    const handleSearch = (e) => {
      setQuery(e.target.value);
    };
  return <>
  <div className='mt-10   mx-auto gap-2   flex flex-col'>

    <div className='-my-2 -mx-4 sm:-mx-6 lg:mx-8 overflow-x-auto'>
<div className='inline-block ml-2 md:ml-1 min-w-full  py-2 align-middle md:px-6 lg:px-8'>
<motion.div
 initial={{scale:0.5}}
 transition={{
     duration:0.7,
     type:"tween"
 }}
 whileInView={{
     scale:1
 }}
 className=' mb-4 relative    '>
            <div className='absolute left-[4px] border-r border-[--secondary-color] -translate-y-[50%] top-[50%]'>
            <CiSearch className="text-[--secondary-color]" size={24} />

            </div>
            <input className='w-fit p-2 pl-[29px]'placeholder="Search for products..." value={query} onChange={handleSearch} type="text" />

          </motion.div>
    <div className='overflow-x-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
      
        {loadding ? (
          <div className="flex justify-center 
             items-center mt-4 bg-transparent">
           <FaSpinner size={52} className="mx-auto  animate-spin" />
          </div>
        ) : (
            <table
            
            className=' min-w-full divide-y  divide-gray-300'>
<thead className='bg-[--secondary-color]  text-white font-bold capitalize'>
    <tr >
   
        <th
        scope='col'
        className='py-3.5 pl-6 pr-3 text-left text-sm font-semibold ' 
        >
            name
        </th>
        <th
        scope='col'
        className='py-3.5 pl-6 pr-3  text-left text-sm font-semibold ' 
        >
            price
        </th>
        <th
        scope='col'
        className='hidden md:table-cell py-3.5 pl-6 pr-3 text-left text-sm font-semibold ' 
        >
            description
        </th>
        <th
        scope='col'
        className='py-3.5 pl-6 pr-3 text-left text-sm font-semibold ' 
        >
            action
        </th>
    </tr>
</thead>
{
    products?
    <tbody className='divide-y dark:divide-[#101010] divide-gray-200 text-gray-900 dark:text-white bg-white dark:bg-[#171717]'>

    {
        products?.map((ele)=>{
            const productImage = images?.find((img)=> img.productId === ele.productId)
            return(
                <motion.tr 
                initial={{opacity:0}}
                transition={{
                    duration:0.7,
                    type:"tween"
                }}
                whileInView={{
                    opacity:1
                }}
                key={ele.productId}>
                 <td className='whitespace-nowrap   px-4 pl-4 pr-3 text-sm font-medium text-[--secondary-color] sm:pl-6'>
            {ele.name}
     <Image
                                src={productImage?productImage?.imageUrl:"/placeholder.png"}
                                alt='img'
                                width={80}
                                height={80}
                                className='object-cover transition-all hover:scale-[1.3] mt-1  mb-[2px] rounded-lg   '
                              />
                </td>
             <td className='whitespace-nowrap uppercase px-4 pl-4 pr-3 text-sm font-medium  sm:pl-6'>
             {ele.price} egp 
                </td>
             <td className=' hidden md:table-cell px-4 pl-4 pr-3 text-sm font-medium  sm:pl-6'>
             {ele.description}
                </td>
             <td className='whitespace-nowrap flex flex-col gap-2 px-4 pl-4 pr-3 text-sm font-medium  mt-1 sm:pl-6'>
             <Link href={`Products/Update/${ele.productId}`} className='flex  group p-[2px] mx-auto text-white border hover:border-[--secondary-color]  transition-all rounded-sm hover:bg-white hover:text-[--secondary-color] gap-1 items-center bg-[--secondary-color]'>
            <span className='hidden md:block capitalize'>update</span>
            <div className='mx-auto md:p-0 p-[2px]'>
                <BiSolidMessageAltEdit className='block md:text-[20px] text-[24px] group-hover:scale-[1.2]   transition-all '/>
                </div>
             </Link>
     
    
             <Link href={`/Products/Delete/${ele.productId}`} className='flex  group p-[2px] px-[2px] md:px-1 mx-auto text-white border hover:border-red-600  transition-all rounded-sm hover:bg-white hover:text-red-600 gap-1 items-center bg-red-400'>
            <span className='hidden md:block capitalize'>delete</span>
            <div className='mx-auto md:p-0 p-[2px]'>
            <MdAutoDelete className='block md:text-[20px] text-[24px] group-hover:scale-[1.2]   transition-all '/>
                </div>
             </Link>
             <Link href={`/Products/Upload/${ele.productId}`} className='flex  group p-[2px]  mx-auto text-white border hover:border-[--secondary-color]  transition-all rounded-sm hover:bg-white hover:text-[--secondary-color] gap-1 items-center bg-[--secondary-color]'>
            <span className='hidden md:block capitalize'>upload</span>
            <div className='mx-auto md:p-0 p-[2px]'>
            <FaRegImage className='block md:text-[20px] text-[24px] group-hover:scale-[1.2]   transition-all '/>
                </div>
             </Link>
                </td>
             </motion.tr>
            )
        }
    
        
        )
    }
    
    </tbody>:<SkeletonProduct/>
}




        </table>
        )}   
    </div>

</div>
    </div>
  </div>
  </>
}

export default TableOfProducts