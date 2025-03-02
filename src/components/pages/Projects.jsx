import React, { useEffect, useState } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const defaultThumbnail = "./public/GitHub Project Thumbnails/fallback_image.jpg"; // Fallback image

    useEffect(() => {
        fetch("https://api.github.com/users/its-maneeshk/repos")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(data);
                } else {
                    console.error("Unexpected API response:", data);
                    setRepos([]);
                }
            })
            .catch((err) => {
                console.error("Error fetching repos:", err);
                setRepos([]);
            });
    }, []);

    const allowedRepos = [
        "GestureSlide-Image_Slider","Fake-Product-Detection-System","Voting-System-Using-Blockchain",
        "calc.io","ManishHubX",
        "Voting-System-Using-Blockchain","HotelManagementSystemUsingJDBC","CalculatorUsing-Java",
        "library-Website","manishpatel","e-Book","HTML-CSS-Django-projects",
    ];

    const filteredRepos = repos.filter((repo) => allowedRepos.includes(repo.name));
    const visibleRepos = filteredRepos.slice(0, visibleCount);

    return (
        <section className="p-8 bg-gray-200 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-center text-gray-800">My GitHub Projects</h2>

            {visibleRepos.length === 0 ? (
                <div className="flex justify-center items-center my-10">
                    <button
                        disabled
                        type="button"
                        className="text-white w-60 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 me-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                            />
                        </svg>
                        Loading please wait...
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto gap-6 mt-8">
                        {visibleRepos.map((repo) => {
                            // const repoThumbnail = `./src/assets/GitHub Project Thumbnails/${repo.name}.png`;
                            const repoThumbnail = `./GitHub Project Thumbnails/${repo.name}.png`;

                            return (
                                <div
                                    key={repo.id}
                                    className="group block rounded-lg bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <div className="relative">
                                        <img
                                            src={repoThumbnail}
                                            alt={repo.name}
                                            className="h-44 w-full object-fill border-1 rounded border-gray-500 p-1"
                                            onError={(e) => (e.target.src = defaultThumbnail)}
                                        />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900 truncate">{repo.name}</h3>
                                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                            {repo.description || "No description available"}
                                        </p>
                                        <div className="space-x-2">
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                <button className="mt-4 w-1/3 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg transition hover:bg-blue-700">
                                                    View Repo
                                                </button>
                                            </a>
                                            {repo.homepage ? (
                                                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                                    <button className="mt-4 w-1/3 bg-green-600 text-white text-sm font-medium py-2 rounded-lg transition hover:bg-green-700">
                                                        View Live
                                                    </button>
                                                </a>
                                            ) : (
                                                <button disabled className="mt-4 w-1/3 bg-gray-400 text-white text-sm font-medium py-2 rounded-lg cursor-not-allowed">
                                                    View Live
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {visibleCount < filteredRepos.length && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setVisibleCount((prev) => prev + 6)}
                                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default Projects;
