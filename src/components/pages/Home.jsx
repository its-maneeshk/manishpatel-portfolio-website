import React from 'react'

const Home = () => {
  const handleScroll = () => {
    const element = document.getElementById('more-button');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section class="text-gray-600 body-font" id='more-button'>
        <div class="container mx-auto flex px-4 py-16 max-w-screen-xl md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <a href="#" class="hidden md:inline-flex justify-between items-center py-1 px-1 pr-4 mb-3 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Fresher</span> <span class="text-sm font-medium">Hey there 👋 are you searching projects?</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bridging Technology & Creativity—
              <br class="hidden lg:inline-block" />I'm <span className='text-6xl text-primary-700'>Manish Patel</span>,<br />a CSE Engineer crafting digital solutions that make an impact.
            </h1>
            <p class="mb-8 leading-relaxed">From crafting seamless digital experiences to pushing the boundaries of innovation, I build, break, and create solutions that matter. Let’s shape the future, one line of code at a time!</p>
            <div class="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Contact Info
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-gray-200 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Download Resume
              </a>
            </div>
            <div className='flex justify-center items-center py-2 px-12 rounded-lg border bg-gray-200 border-gray-300'>
              <div className="flex justify-center space-x-4 align-center">
                <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md text-gray-950 hover:text-primary-700 hover:scale-105 transition-transform duration-200">
                  <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md text-gray-950 hover:text-primary-700 hover:scale-105 transition-transform duration-200">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md text-gray-950 hover:text-primary-700 hover:scale-105 transition-transform duration-200">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md text-gray-950 hover:text-primary-700 hover:scale-105 transition-transform duration-200">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* BLACK AND WHIRE IMAGE AND FRAME */}
            <div className="flex">
              <div className="relative p-3 border-8 border-gray-600 rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-20 z-10 pointer-events-none"></div>
                <img
                  src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-alipazani-2584269.jpg&fm=jpg"
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
              Just Like <span className="text-primary-700">Great Code</span>, <br/>
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
