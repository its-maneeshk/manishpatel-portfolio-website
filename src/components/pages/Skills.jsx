import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaEthereum, FaLaptopCode, FaUsers } from "react-icons/fa";
import { SiTailwindcss, SiSolidity, SiFlask, SiMongodb, SiGit, SiVite, SiPostman } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" />, desc: "Building dynamic and interactive user interfaces." },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "Backend development for scalable applications." },
    { name: "Python", icon: <FaPython className="text-yellow-500" />, desc: "Versatile programming for AI, ML, and automation." },
    { name: "Flask", icon: <SiFlask className="text-gray-700" />, desc: "Lightweight web framework for API development." },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, desc: "NoSQL database for scalable applications." },
    { name: "SQL", icon: <FaDatabase className="text-blue-700" />, desc: "Relational database management." },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, desc: "Utility-first CSS framework for modern styling." },
    { name: "Git & GitHub", icon: <SiGit className="text-red-500" />, desc: "Version control and collaborative coding." },
];

const tools = [
    { name: "Vite.js", icon: <SiVite className="text-purple-500" />, desc: "Fast development environment for modern web apps." },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, desc: "API testing and development tool." },
    { name: "Linux", icon: <FaLaptopCode className="text-gray-900" />, desc: "Command-line and server management." },
];

const softSkills = [
    { name: "Problem Solving", icon: <FaLaptopCode className="text-blue-500" />, desc: "Analytical thinking and debugging expertise." },
    { name: "Team Collaboration", icon: <FaUsers className="text-green-500" />, desc: "Effective communication and teamwork." },
    { name: "Quick Learner", icon: <FaLaptopCode className="text-purple-500" />, desc: "Adaptability to new technologies and frameworks." },
];

const Skills = () => {
    return (
        <section className="p-8 bg-gray-200">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">My Skills & Expertise</h2>
            <p className="text-center text-xl text-gray-600 mx-auto mb-8">
                I am learning full-stack web development and backend API integration. Here are the technologies and tools I work with.
            </p>

            {/* Technical Skills Section */}
            <h3 className="text-3xl font-semibold text-center text-gray-800 mt-12 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-medium text-gray-800">{skill.name}</p>
                        <p className="text-sm text-gray-600 text-center">{skill.desc}</p>
                    </div>
                ))}
            </div>

            {/* Technologies & Tools Section */}
            <h3 className="text-3xl font-semibold text-center text-gray-800 mt-12 mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                {tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                        <div className="text-4xl mb-3">{tool.icon}</div>
                        <p className="text-lg font-medium text-gray-800">{tool.name}</p>
                        <p className="text-sm text-gray-600 text-center">{tool.desc}</p>
                    </div>
                ))}
            </div>

            {/* Soft Skills Section */}
            <h3 className="text-3xl font-semibold text-center text-gray-800 mt-12 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                {softSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-lg font-medium text-gray-800">{skill.name}</p>
                        <p className="text-sm text-gray-600 text-center">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
