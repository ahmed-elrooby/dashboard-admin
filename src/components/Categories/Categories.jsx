"use client"
import axiosInstance from '@/_utils/axiosInstance';
import { context } from '@/Providers/Context/ContextData';
import Link from 'next/link';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { withSwal } from 'react-sweetalert2';
import TableOfCategories from './TableOfCategories';
import { motion } from 'framer-motion';

const Categories = ({ swal }) => {
  const { categories, getAllCategories } = useContext(context);
  // _____________________________________________
  // delete category 

  console.log(categories)


  const handleDelete = async (ele) => {
  


    swal.fire(
      {
        title: "Are You Sure?",
        text: `Do You Went to delete ${ele.name}`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#F87171",
        reverseButtons: true,
      }
    ).then(async result => {
      console.log(result)
      if (result.isConfirmed) {
        //call delete function
        try {
          const { data } = await axiosInstance.delete(`/api/Category/${ele.categoryId}`)
          if (data.isSuccess) {
            toast.success("Category deleted successfully")
            getAllCategories();

          }
        } catch (err) {
          console.log(err)
        }

      }

    })
  }


  return <>
    <div className=' w-[95%] mb-3  mx-auto'>
    <div className='flex ml-3 gap-1 md:flex-row flex-col justify-between items-start md:items-center'>
    <motion.div
     initial={{scale:0.5}}
     transition={{
         duration:0.7,
         type:"tween"
     }}
     whileInView={{
         scale:1
     }}
    className='flex flex-col gap-1 items-start'>
          <h1 className='btn'>categories </h1>
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
<Link href="AddCateogories" className='btn-primary w-full text-center md:w-fit'>add new category</Link>

</motion.div>
      </div>


   
   <TableOfCategories handleDelete={handleDelete}  />

    </div>
  </>
}


export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
