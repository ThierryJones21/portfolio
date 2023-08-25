import React from 'react';
import {motion} from "framer-motion"
import Link from 'next/link'
const Skill = ({name, x, y}) => {
    return(
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px6 p-4 shawdow-dark cursor-pointer absolute'
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:x,y:y}}
                transition={{duration:1.5}}
                viewport={{once:true}}
                >
                {name}
                  
        </motion.div>
    )
  }
export default Skill;