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
   <form onSubmit={handleSkills} className='w-full flex  '>
        <div className='flex w-full flex-col md:flex-row gap-1 justify-between'>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder='Enter your skills....'
          />
          <button 
          className='w-fit btn-primary'>Add 
          </button>
        </div>
       
      </form>
      <div className='flex flex-wrap   justify-center gap-4'>
          {skills?.map((skill, idx) => (
            <div
            key={idx}
            className="btn-primary py-[2px]"
          >
            <span>{skill}</span>
            <button
             onClick={()=>{deleteItem(skill)}}
              className="p hover:text-red-500 transition-all"
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
