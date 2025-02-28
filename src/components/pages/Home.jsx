import React from 'react'
import heroImage from '../../assets/AdminImage.jpg'
import { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resume from '../../assets/resume/manish-resume.pdf'

const socialLinks = [
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/its_maneeshk_/' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/its-maneeshk/' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/itsmaneeshk/' },
  { name: 'Twitter', icon: <FaTwitter />, url: 'https://x.com/its_maneeshk_' },
];


const Home = () => {

  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section class="text-gray-600 body-font" id='more-button'>
        <div class="container mx-auto flex px-4 py-16 max-w-screen-xl md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <a href="#" class="hidden md:inline-flex justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Fresher</span> <span class="text-sm font-medium">Hey there 👋 are you searching projects?</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">Bridging Technology & Creativity—
              <br class="hidden lg:inline-block" />I'm <span className='text-5xl font-salita text-primary-700'>maneesh patel</span>,<br />a CSE Engineer crafting digital solutions that make an impact.
            </h1>
            <p class="mb-8 font-thin leading-relaxed">From crafting seamless digital experiences to pushing the boundaries of innovation, I build, break, and create solutions that matter. Let’s shape the future, one line of code at a time!</p>
            <div>
              <div class="flex flex-col mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  Contact Info
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <button
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-gray-200 hover:bg-gray-300 focus:ring-4"
                  onClick={() => setShowResume(true)}
                >
                  View Resume
                  <svg className="mr-2 ml-1 w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                </button>
                {showResume && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                      <h2 className="text-xl font-bold mb-4">Manish's Resume</h2>
                      <iframe src={resume} className="w-full h-96" title="Resume"></iframe>
                      <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={() => setShowResume(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex justify-center items-center py-2 px-6 rounded-lg border bg-gray-200 border-gray-300'>
                <div className="flex justify-center space-x-7">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-4xl">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* BLACK AND WHIRE IMAGE AND FRAME */}
            <div className="flex">
              <div className="relative p-3 border-8 border-gray-600 rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-20 z-10 pointer-events-none"></div>
                <img
                  src={heroImage}
                  alt="Retro Portrait"
                  className="w-80 h-80 z-0 object-cover rounded-lg filter grayscale contrast-125 brightness-90 opacity-80"
                />

                {/* Scratched Corners for Worn-out Feel */}
                <div className="absolute inset-0 border-[1px] border-gray-500 opacity-40 rounded-lg"></div>

                {/* Hanging Frame Illusion */}
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-600 rounded-full shadow-md"></div>
                <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-1 h-10 bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 bg-gray-200 body-font">
        <div class="container px-6 py-20 max-w-screen-xl mx-auto">
          <div class="flex flex-col text-center w-full mb-10 lg:mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">The Journey Starts from Here...</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-950 text-left lg:text-center">The Best <span className="text-primary-700">Technology</span> Is the One That Feels Effortless —
              Just Like <span className="text-primary-700">Great Code</span>, <br />
              It Works Without<span className="text-primary-700"> Being Noticed</span>.</h1>
          </div>
          <div className="mx-6 lg:mx-24">
            <ol className="relative border-s border-gray-600">
              {timelineData.map((item, index) => (
                <li key={index} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -start-3 ring-8 ring-gray-800">
                    <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-2 text-xl font-semibold text-gray-950">
                    {item.title}
                    {item.isLatest && (
                      <span className="ml-3 bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        Currently
                      </span>
                    )}
                  </h3>
                  <time className="block mb-2 text-sm text-gray-900">{item.date}</time>
                  <p className="text-base text-primary-700">{item.location}</p>
                  <p className="mb-4 text-base text-gray-800">{item.description}</p>
                  {item.link && (
                    <a href={item.link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                      Download Resume
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="text-gray-300 bg-[#142F32] body-font">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center">
          <div className="w-full max-w-4xl">
            <div className="p-6 rounded-lg border-2 border-indigo-500 text-center shadow-lg">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
                Contribute & Make a Difference!
              </h1>
              <p className="mb-6 leading-relaxed text-lg">
                This project is open-source! Your contributions can help enhance its impact and functionality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                {/* GitHub Repo Button */}
                <a
                  href="https://github.com/its-maneeshk/Fake-Product-Detection-System.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center font-semibold text-gray-950 bg-[#E2FECC] py-5 px-6 rounded-lg w-full sm:w-auto hover:bg-white hover:scale-105 transition-transform focus:outline-none shadow-md"
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
                  className="flex flex-col sm:flex-row items-center  justify-center text-center sm:text-start font-semibold text-gray-950 bg-white py-4 px-6 rounded-lg w-full sm:w-auto hover:bg-gray-100 hover:scale-105 transition-transform duration-200 focus:outline-none shadow-md"
                >
                  <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 3v8"></path> <path d="M18 3v8"></path> <path d="M6 12a6 6 0 0 0 12 0"></path> <circle cx="6" cy="3" r="2"></circle> <circle cx="18" cy="3" r="2"></circle> <circle cx="12" cy="15" r="2"></circle>
                  </svg>
                  <span className='leading-4'>
                    Want to contribute?
                    <br className="hidden sm:block" />
                    <span className='text-xs' >Fork the repo & submit a pull request!</span>
                  </span>
                  <svg className="w-5 h-5 ml-2 mt-1 sm:mt-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                Get involved and help shape the future of this project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

const timelineData = [
  {
    title: "Parul University",
    date: "Journey Began in 2022 – Still Exploring",
    location: "P.O.Limda, Ta.Waghodia, Vadodara, Gujarat, India - 391760",
    description: "Currently pursuing a B.Tech in Computer Science and Engineering with a strong focus on full-stack development, data structures, and emerging technologies.",
    isLatest: true,
    link: "#",
  },
  {
    title: "National Infotech College",
    date: "A Journey from 2020 to 2022",
    location: "Shiromani Tole, Birgunj 44300, Nepal",
    description: "Successfully completed Higher Secondary Education (+2) with a strong academic focus on PCM (Physics, Chemistry, and Mathematics). Developed a deep understanding of scientific principles, analytical reasoning, and mathematical problem-solving, laying a solid foundation for advanced studies in engineering and technology.",
    isLatest: false,
  },
  {
    title: "Holy Land English Secondary School PVT. LTD.",
    date: "A Journey from 2008 to 2020",
    location: "Shreepur, Birganj, Parsa, Province 2, Nepal",
    description: "Completed secondary education (Class 10) with a comprehensive curriculum, building a strong foundation in core subjects and essential analytical, problem-solving, and critical thinking skills.",
    isLatest: false,
  },
];


export default Home
