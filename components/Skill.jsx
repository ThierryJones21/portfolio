import React from 'react';
import {motion} from "framer-motion"
import Link from 'next/link'
const Skill = ({name, percentage}) => {
    return(
      <div>
        <div className="mb-1 text-base font-medium dark:te">{name}</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-400 h-2.5 rounded-full dark:bg-blue-500" style={{width: percentage}}></div>
        </div>

        {/* // motion progress bar with level of proficiency, new, proficient, mastered
      // <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      //           py-3 px6 p-4 shawdow-dark cursor-pointer absolute'
      //           whileHover={{scale:1.05}}
      //           initial={{x:0,y:0}}
      //           whileInView={{x:x,y:y}}
      //           transition={{duration:1.5}}
      //           viewport={{once:true}}
      //           >
      //           {name}
                  
      //   </motion.div> */}
      </div>
    );
  }
export default Skill;