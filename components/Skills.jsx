import Image from 'next/image';
import React from 'react';
import {motion} from "framer-motion"
import Skill from './Skill'
import Link from 'next/link'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
              <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#ecf0f3] p-6 shawdow-dark cursor-pointer  text-[#5651e5] text-6xl'
                whileHover={{scale:1.05}}>
                  Skills
              </motion.div>
              <Skill name="Python" x="-30vw" y="-10vw"/>
              <Skill name="Javascript" x="30vw" y="-10vw"/>
              <Skill name="AWS" x="-20vw" y="10vw"/>
              <Skill name="NgingX" x="-25vw" y="16vw"/>
              <Skill name="SQL" x="-30vw" y="-10vw"/>
              <Skill name="C++" x="30vw" y="15vw" />
              <Skill name="Power Automate" x="30vw" y="10vw"/>
              <Skill name="NextJS" x="10vw" y="-10vw"/>
              <Skill name="Tailwind" x="20vw" y="-10vw"/>
          </div>
        </div>
      </div>
  );
};

export default Skills;
