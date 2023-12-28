import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-2xl text-[#5651e5] tracking-wider text-center'>
              Tetris
            </h3>
            <p className='pb-4 pt-2 text-[#5651e5] text-center'>JavaScript</p>
            <Link href="/tetris">
              <p className='text-center py-3 p-3 rounded-lg bg-[#5651e5] text-white font-bold text-lg cursor-pointer'>
                Link to the project
              </p>
            </Link>
          </div>
          <div>
            <h3 className='text-2xl text-[#5651e5] tracking-wider text-center'>
              Capstone
            </h3>
            <p className='pb-4 pt-2 text-[#5651e5] text-center'>Python/JS</p>
            <Link href="">
              <p className='text-center py-3 p-3 rounded-lg bg-[#5651e5] text-white font-bold text-lg cursor-pointer'>
                Link to the project
              </p>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default Projects;
