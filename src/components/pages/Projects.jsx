import React, { useEffect, useState } from "react";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const defaultThumbnail = "/fallback_image.jpg"; // Fallback image

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
        "GestureSlide-Image_Slider",
        "Fake-Product-Detection-System",
        "Voting-System-Using-Blockchain",
        "calc.io",
    ];

    const filteredRepos = repos.filter((repo) => allowedRepos.includes(repo.name));
    const visibleRepos = filteredRepos.slice(0, visibleCount);

    return (
        <section className="p-8 bg-gray-200 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-center text-gray-800">My GitHub Projects</h2>
            
            {visibleRepos.length === 0 ? (
                <p className="text-center text-gray-500 mt-6">No Repositories to Show...</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto gap-6 mt-8">
                        {visibleRepos.map((repo) => {
                            const repoThumbnail = `/thumbnails/${repo.name}.png`;

                            return (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-lg bg-white shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    {/* Repo Thumbnail */}
                                    <div className="relative">
                                        <img
                                            src={repoThumbnail}
                                            alt={repo.name}
                                            className="h-44 w-full object-cover"
                                            onError={(e) => (e.target.src = defaultThumbnail)}
                                        />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                    </div>

                                    {/* Repo Details */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900 truncate">{repo.name}</h3>
                                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                            {repo.description || "No description available"}
                                        </p>
                                        <button className="mt-4 w-1/2 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg transition hover:bg-blue-700">
                                            View on GitHub
                                        </button>
                                    </div>
                                </a>
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
