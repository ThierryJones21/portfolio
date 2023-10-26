import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Thierry | Resume</title>
        <link rel='icon' href='/Logo.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Thierry Jones</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/thierry-jones-5106a6172/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/ThierryJones21'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
         {/* Education */}
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Computer Engineering, Bachelor of Applied Science
            </span>
            <span className='px-2'>|</span>Queen’s University, Kingston, ON  2018 – 2023 
          </p>
          <p className='py-1 italic'>Relevant Courses</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Algorithms, Machine Learning and Deep Learning, Object Oriented Programming, Data Structures,
            Operating Systems, Cryptography and Network Security, Programming Language Processors, Computer Graphics
            </li>
          </ul>
        </div>
        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Technical Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Languages</span>
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>C
            <span className='px-2'>|</span>C ++
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>React Native
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>MATLAB
            <span className='px-2'>|</span>Bash Shell Scripting
            <span className='px-2'>|</span>Hugo
          </p>
          <p className='py-2'>
            <span className='font-bold'>Software</span>
            <span className='px-2'>|</span>AWS
            <span className='px-2'>|</span>Red Hat Linux 
            <span className='px-2'>|</span>NGINX
            <span className='px-2'>|</span>GitHub/Gitlab
            <span className='px-2'>|</span>Jira/Confluence
            <span className='px-2'>|</span>Solid Edge
            <span className='px-2'>|</span>Power Automate 
          </p>
          <p className='py-2'>
            <span className='font-bold'>Hardware</span>
            <span className='px-2'>|</span>Raspberry
            <span className='px-2'>|</span>Arduino
            <span className='px-2'>|</span>Video Content Creation
            <span className='px-2'>|</span>Oscilliscopes
            <span className='px-2'>|</span>Soldering
            <span className='px-2'>|</span>PCB prototyping
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        {/* Proxi.id */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Proxi.ID
            </span>
            <span className='px-2'>|</span>Ottawa, ON
          </p>
          <p className='py-1 italic'>End User Support Specialist (2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Created flows to automate dashboards and tools for Product Support engineers and managers
            </li>
            <li>
              Designed, built, and maintained a website in collaboration with the Ericsson Response humanitarian emergency relief program. 
            </li>
            <li>
            Encrypted VPN data to help keep employee’s and volunteers’ connection secure in any situation or part of the world.
            </li>
            <li>
            Team leader of new co-ops hired in September 2022.
            </li>
          </ul>
        </div>
        {/* Experience */}
        {/* Ericsson */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Ericsson
            </span>
            <span className='px-2'>|</span>Ottawa, ON
          </p>
          <p className='py-1 italic'>Automation Developer (2021 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Created flows to automate dashboards and tools for Product Support engineers and managers
            </li>
            <li>
              Designed, built, and maintained a website in collaboration with the Ericsson Response humanitarian emergency relief program. 
            </li>
            <li>
            Encrypted VPN data to help keep employee’s and volunteers’ connection secure in any situation or part of the world.
            </li>
            <li>
            Team leader of new co-ops hired in September 2022.
            </li>
          </ul>
        </div>
        {/* Catalyst */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Catalyst.Earth
            </span>
            <span className='px-2'>|</span>Ottawa, ON
          </p>
          <p className='py-1 italic'>Junior Software Developer (2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Calatlyst.Earth develops complete and integrated software tools for remote sensing, digital photogrammetry, image analysis, map production, mosaicking. 
            </li>
            <li>
            Developed customizable UI templates for the marketing team of 20+ employees for easy map creation and customization to display for clients. 
            </li>
            <li>
            Created a dashboard with the marketing team that queries client data through various APIs (Google, YouTube, Pardot) and displays easy to use statistics to generate potential leads.
            </li>
            <li>
            Adhered to agile methodology, interfacing with 100+ clients and users, implementing feedback to maximize customer satisfaction.
            </li>
          </ul>
        </div>
        {/* Eng Projects */}
        <h5 className='text-center underline text-[18px] py-4'>
          Engineering Projects
        </h5>
        {/* Capstone Squat Form Corrector */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Capstone - SmartSquat Feedback App</span>
            <span className='px-2'>|</span>2023
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Successfully developed a functionnal prediction and assessment application, the SmartSquat Feedback App
            </li>
            <li>
            Played a pivotal role in ingesting and organizing the training dataset for the machine learning algorithm, ensuring the foundation for accurate squat form assessment.
            </li>
            <li>
            Implemented functionality of the application by writing Python code to detect joint positions from video feeds, and designed 
            an algorithm to evaluate form and performance based on comprehensive research on optimal squatting techniques. 
            </li>
            <li>Prepared a live demonstration for the team's presentation and made significant contributions to the final project report, ensuring the project's success.
            </li>
          </ul>
        </div>
        {/* CrowdPleaser */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Crowd Pleaser</span>
            <span className='px-2'>|</span>2022
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Designed an extension web application for Spotify, a voting system for group listening sessions users will be able to select songs from playlists and our application will place them in a priority queue based on their ranking.
            </li>
            <li>
            Using the Google Firebase Database to store API calls to and from Spotify’s server, and React.js to integrate our functionality into a visually appealing platform.
            </li>
          </ul>
        </div>
        {/* A Game of Kings at Queen's */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>A Game of Kings at Queen's</span>
            <span className='px-2'>|</span>2021
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Utilized C++, and the Qt Creator Studio to create a chess application with four of my colleagues, using engineering design principles such as SCAMPER, the iterative process cycle and agile workflow. 
            </li>
            <li>
            Designed the user interface as well as the algorithm for verifying proper functionality of standard chess.
            </li>
          </ul>
        </div>
        {/* Additional Info */}
        <h5 className='text-center underline text-[18px] py-4'>
        Additional Information
        </h5>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Delegate: Microsoft Azure Conference 2019, Queen’s Engineering Competition (Junior Design, Programming)
           </li>
            <li>
            Languages: French, English (Bilingual) 

            </li>
            <li>
            Projects: Building and hosting my own portfolio website, Raspberry Pi Health Application (programmed in python and C++)

            </li>
            <li>  
            Hobbies: Weight Training, Reading (Witcher series), Lifesaving Athlete (Competed in Provincials 2019 Saugeen Shores)	 
            </li>
          </ul>
      </div>
    </>
  );
};

export default resume;
