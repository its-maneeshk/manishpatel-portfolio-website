import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaEthereum, FaLaptopCode, FaUsers } from "react-icons/fa";
import { SiTailwindcss, SiSolidity, SiFlask, SiMongodb, SiGit, SiVite, SiPostman } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
    { name: "Solidity", icon: <SiSolidity className="text-black" /> },
    { name: "Ethereum", icon: <FaEthereum className="text-purple-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Git & GitHub", icon: <SiGit className="text-red-500" /> },
];

const tools = [
    { name: "Vite.js", icon: <SiVite className="text-purple-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Linux", icon: <FaLaptopCode className="text-gray-900" /> },
];

const softSkills = [
    { name: "Problem Solving", icon: <FaLaptopCode className="text-blue-500" /> },
    { name: "Team Collaboration", icon: <FaUsers className="text-green-500" /> },
    { name: "Quick Learner", icon: <FaLaptopCode className="text-purple-500" /> },
];

const Skills = () => {
    return (
        <section className="p-8 bg-gray-200">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">My Skills</h2>

            {/* Technical Skills Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-medium text-gray-700">{skill.name}</p>
                    </div>
                ))}
            </div>

            {/* Technologies & Tools Section */}
            <h3 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                {tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                        <div className="text-4xl mb-3">{tool.icon}</div>
                        <p className="text-lg font-medium text-gray-700">{tool.name}</p>
                    </div>
                ))}
            </div>

            {/* Soft Skills Section */}
            <h3 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-md mx-auto">
                {softSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-medium text-gray-700">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
