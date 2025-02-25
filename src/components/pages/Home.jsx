import React from 'react'
import bgImage from '../../assets/bg.jpg'

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br class="hidden lg:inline-block" />readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>

      <section className='bg-gray-800'>
        <div className='px-24 py-16'>

          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
              <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg> Download ZIP</a>
            </li>
            <li class="mb-10 ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="text-gray-300 bg-[#142F32] body-font">
                <div className="container mx-auto flex px-5 py-16 items-center justify-center">
                    <div className="w-full max-w-4xl">
                        <div className="p-6 rounded-lg border-2 border-indigo-500 text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
                                Join Us & Improve the System!
                            </h1>
                            <p className="mb-6 leading-relaxed">
                                This project is open-source! Contribute, improve, or suggest features to make it better.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                                {/* GitHub Repo Button */}
                                <a
                                    href="https://github.com/its-maneeshk/Fake-Product-Detection-System.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center font-semibold text-gray-950 bg-[#E2FECC] py-6 px-6 rounded-lg w-full sm:w-auto hover:bg-white hover:scale-105 transition-transform focus:outline-none shadow-md"
                                >
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-2">
                                        <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.266c-3.338.726-4.037-1.61-4.037-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.743.084-.727.084-.727 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.49.997.108-.776.42-1.305.764-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.01-.323 3.3 1.23a11.43 11.43 0 0 1 3-.404c1.02.006 2.045.137 3 .404 2.29-1.553 3.298-1.23 3.298-1.23.653 1.65.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.477 5.922.43.37.81 1.104.81 2.226v3.293c0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                                    </svg>
                                    GitHub Repo
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                                {/* Contribute Button */}
                                <a
                                    href="https://github.com/login?return_to=%2Fits-maneeshk%2FFake-Product-Detection-System"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-start font-semibold text-gray-950 bg-white py-3 px-6 rounded-lg w-full sm:w-auto hover:bg-gray-100 hover:scale-105 transition-transform duration-200 focus:outline-none shadow-md"
                                >
                                    <svg
                                        className="w-7 h-7 mr-2"
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M6 3v8"></path> <path d="M18 3v8"></path> <path d="M6 12a6 6 0 0 0 12 0"></path> <circle cx="6" cy="3" r="2"></circle> <circle cx="18" cy="3" r="2"></circle> <circle cx="12" cy="15" r="2"></circle>
                                    </svg>
                                    <span>
                                        Want to contribute? 
                                        <br className="hidden sm:block" />
                                        Fork the repo & submit a pull request!
                                    </span>
                                    <svg className="w-5 h-5 ml-2 mt-1 sm:mt-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>

                            <p className="text-xs text-gray-400 mt-4">
                                Get involved and help shape the future of this project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>

  )
}

export default Home
