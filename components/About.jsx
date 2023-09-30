import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About Me
          </p>
          <p className='py-2 text-gray-600'>
          I am an Experienced Automation Specialist with a demonstrated history of working in 
          the information technology and services industry. Skilled in Programming Languages, 
          Engineering Design, Python (Programming Language), and French. Strong engineering 
          professional with a Bachelor of Applied Science - BASc focused in Computer Engineering (ECE) from Queen's University.
          </p>
          
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Click here to see my projects
            </p>
          </Link> */}
          </div>
        
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image
                  src="/assets/prof-pic.png"
                  width={1450}
                  height={1250}
                  alt="Picture of the author"
                />
        </div>
      </div>
    </div>
  );
};

export default About;
