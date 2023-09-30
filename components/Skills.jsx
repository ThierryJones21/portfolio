import React from 'react';
import Skill from './Skill';
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen p-2 flex justify-left'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
      <div className='col-span-1'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Skills
          </p>
      </div>
      
      {/* <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight"> */}
              {/* <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#ecf0f3] p-6 shawdow-dark cursor-pointer  text-[#5651e5] text-6xl'
                whileHover={{scale:1.05}}>
                  Skills
              </motion.div> */}
            <div className='col-span-2'>
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
      </div>
  );
};

export default Skills;
