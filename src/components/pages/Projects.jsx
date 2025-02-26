import React from 'react'
import { useEffect, useState } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 projects
    const defaultThumbnail = "/fallback-image.png"; // Place a default image in your `public` folder

    useEffect(() => {
        fetch("https://api.github.com/users/its-maneeshk/repos")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(data);
                } else {
                    console.error("Unexpected API response:", data);
                    setRepos([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching repos:", error);
                setRepos([]);
            });
    }, []);

    // Include specific repositories
    const allowedRepos = ["GestureSlide-Image_Slider", "Fake-Product-Detection-System", "Voting-System-Using-Blockchain", "calc.io", "Rocksolid---a-clone-website-project", "H-eM-Store", "e-Book", "library-Website", "CalculatorUsing-Java", "HotelManagementSystemUsingJDBC"];
    const filteredRepos = repos.filter(repo => allowedRepos.includes(repo.name));

    // Get only the currently visible projects
    const visibleRepos = filteredRepos.slice(0, visibleCount);

    return (
        <>
            <section>
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-center">My GitHub Projects</h2>
                    {filteredRepos.length === 0 ? (
                        <p className="text-center text-gray-500 mt-4">No Repositories to Show...</p>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                                {visibleRepos.map((repo) => {
                                    const repoThumbnail = `/thumbnails/${repo.name}.png`; // Store repo images in `public/thumbnails/`

                                    return (
                                        <div key={repo.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                            <img
                                                src={repoThumbnail}
                                                alt={repo.name}
                                                className="w-full h-48 object-cover"
                                                onError={(e) => (e.target.src = defaultThumbnail)}
                                            />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold">{repo.name}</h3>
                                                <p className="text-gray-600 text-sm">
                                                    {repo.description ? repo.description : "No description available"}
                                                </p>
                                                <a
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg"
                                                >
                                                    View on GitHub
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Load More Button */}
                            {visibleCount < filteredRepos.length && (
                                <div className="text-center mt-6">
                                    <button
                                        onClick={() => setVisibleCount((prev) => prev + 6)} // Load 6 more on click
                                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <section>
                <div className="bg-gray-100">
                    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                            <svg
                                viewBox="0 0 88 88"
                                className="w-full max-w-screen-xl text-indigo-100"
                            >
                                <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                                <circle
                                    fillOpacity="0.2"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="44"
                                />
                                <circle
                                    fillOpacity="0.2"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="37.5"
                                />
                                <circle
                                    fillOpacity="0.3"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="29.5"
                                />
                                <circle
                                    fillOpacity="0.3"
                                    fill="currentColor"
                                    cx="44"
                                    cy="44"
                                    r="22.5"
                                />
                            </svg>
                        </div>
                        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Football Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Bowling Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        Disrupt inspire and think tank, social entrepreneur but
                                        preliminary thinking think tank compelling.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Cycling Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        A slice of heaven. O for awesome, this chocka full cuzzie is as
                                        rip-off as a cracker.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Weight Lifting Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        Meanwhile, in behind the bicycle shed, Hercules Morse, as big as
                                        a horse.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Golf Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        Disrupt inspire and think tank, social entrepreneur but
                                        preliminary thinking think tank compelling.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Hockey Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        A business big enough that it could be listed on the NASDAQ goes
                                        belly up.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Shooting Sports</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        Lookout flogging bilge rat main sheet bilge water nipper fluke
                                        to go on account heave down clap of thunder.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                                <div className="p-5">
                                    <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                        <svg
                                            className="w-8 h-8 text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-2 font-bold">Martial Arts</p>
                                    <p className="text-sm leading-5 text-gray-900">
                                        Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr
                                        zimbra, mobly napster.
                                    </p>
                                </div>
                                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
