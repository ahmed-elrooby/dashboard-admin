"use client"
import { IoMdClose } from "react-icons/io";
import React, { useState, useEffect } from 'react';

const AddSkills = () => {
  const [skillInput, setSkillInput] = useState(''); // لتخزين المهارة المدخلة
  const [skills, setSkills] = useState([]); // لتخزين المهارات

  useEffect(() => {
    const savedSkills = JSON.parse(localStorage.getItem('skills')) || [];
        setSkills(savedSkills);
  }, []); 

  const handleSkills = (e) => {
    e.preventDefault();
    const updatedSkills = [...skills, skillInput];
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills)); 
    setSkillInput(''); 
  };
//delete skills 
const deleteItem = (ele)=>{
  const updatedSkills = skills.filter((skill)=> skill !== ele)
  setSkills(updatedSkills);
  localStorage.setItem("skills",JSON.stringify(updatedSkills))
}




  return (
    <div className='w-full'>
   <div className='w-full flex flex-col items-start gap-4'>
   <form onSubmit={handleSkills} className='w-full flex '>
        <div className='flex w-full items-center justify-around'>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className='border-b-2 pb-2 outline-none dark:border-[--secDark-color] border-[--secondary-color] bg-transparent '
            placeholder='Enter your skills'
          />
          <button 
          className=' border text-[--secondary-color] transition-all dark:hover:bg-[--secDark-color] hover:bg-[--secondary-color] dark:hover:text-white hover:text-white hover:border dark:border-[--secDark-color] dark:text-[--secDark-color] border-[--secondary-color] capitalize font-bold px-[15px] py-[5px] rounded-lg'>Add 
          </button>
        </div>
       
      </form>
      <div className='flex flex-wrap   justify-center gap-4'>
          {skills?.map((skill, idx) => (
            <div
            key={idx}
            className="flex items-start gap-1 px-3 py-1 dark:bg-transparent dark:text-[--secDark-color] dark:border-2 dark:border-[--secDark-color] bg-gray-100 rounded-full"
          >
            <span>{skill}</span>
            <button
             onClick={()=>{deleteItem(skill)}}
              className="p-1 hover:text-red-500 transition-all"
            >
              <IoMdClose size={18}  />
            </button>
          </div>
          ))}
        </div>
   </div>
    </div>
  );
};

export default AddSkills;
