import React from 'react';
import Skill from './Skill';
import {motion} from "framer-motion"
import Projects from './Projects'
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full p-10 flex justify-left'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
      <div className='col-span-2 md:col-span-1'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Skills
          </p>
          <div className='py-2'>
              <Skill name="Python" percentage="85%"/>
              <Skill name="Javascript" percentage="65%"/>
              <Skill name="AWS" percentage="60%"/>
              <Skill name="NgingX" percentage="50%"/>
              <Skill name="SQL" percentage="75%"/>
              <Skill name="C++" percentage="80%" />
              <Skill name="Power Automate" percentage="90%"/>
              <Skill name="NextJS" percentage="70%"/>
              <Skill name="Tailwind" percentage="60%"/>
            </div>
      </div>
      
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 md:col-span-1 '>
              <Projects project_url={"/webscraping"}/>
      </div>
      </div>

    </div>
  );
};

export default Skills;
