import React from 'react'

const SkeltonCategories = () => {
 
  return <>
          

          <tbody className='bg-white dark:bg-[#171717]'>
            {Array.from({ length: 15 }).map((_, index) => (
              <tr key={index} className="animate-pulse  ">
                <td className="  bg-white dark:bg-[#171717] ">
                  <span className='w-[80%] h-[15px] block mx-auto rounded-sm dark:bg-gray-600 bg-slate-200'></span>
                </td>
              
                <td className="  bg-white dark:bg-[#171717] ">
                  <span className='w-[80%] h-[15px] block mx-auto rounded-sm dark:bg-gray-600 bg-slate-200'></span>
                </td>                <td className="flex p-2 w-full items-center justify-center gap-2">
                  <div className="bg-slate-200 w-1/2 dark:bg-gray-600 h-[20px]  rounded-sm"></div>
                  <div className="bg-slate-200 w-1/2 dark:bg-gray-600 h-[20px] rounded-sm"></div>
                </td>
              </tr>
            ))}
          </tbody>

  </>
}

export default SkeltonCategories