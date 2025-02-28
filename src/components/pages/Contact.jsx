import React from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const contacts = [
    { name: "Email", icon: <FaEnvelope className="text-red-500" />, info: "Mail Me", link: "mailto:maneeshkurmii@gmail.com" },
    { name: "LinkedIn", icon: <FaLinkedin className="text-blue-700" />, info: "LinkedIn", link: "https://linkedin.com/in/yourprofile" },
    { name: "Location", icon: <FaMapMarkerAlt className="text-green-500" />, info: "Vadodare, Gujarat India" },
];

const Contact = () => {
    return (
        <>
            <section className='bg-gray-200 py-10'>
                <div className=''>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
                    <p className="text-center text-lg text-gray-600 mx-auto mb-8">
                        Feel free to reach out to me through any of the platforms below. I'm always open to collaboration and new opportunities!
                    </p>
                </div>

                <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto px-4">
                    <a
                        href="#"
                        className="relative block overflow-hidden rounded-lg border bg-white border-gray-200 p-5 sm:p-6 lg:p-8 transition-shadow hover:shadow-lg"
                    >
                        <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></span>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                                    Passionate Full-Stack Developer & Problem Solver
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">By Manish Patel</p>
                            </div>

                            <div className="shrink-0">
                                <img
                                    alt="Manish Patel"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="w-16 h-16 rounded-lg object-cover shadow-md"
                                />
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            I'm a CSE student with a passion for <strong>full-stack development </strong>and <strong>problem-solving</strong>.
                            I enjoy working on <strong>real-world challenges</strong>, creating efficient software solutions, and constantly improving my skills.
                            Currently building a <strong>Fake Product Detection System</strong> to enhance trust in eCommerce.
                        </p>

                        <dl className="mt-6 flex gap-6 text-xs text-gray-500">
                            <div className="flex flex-col">
                                <dt className="font-medium text-gray-700">Education</dt>
                                <dd>B.Tech in Computer Science</dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="font-medium text-gray-700">Experience</dt>
                                <dd>Web Application Development</dd>
                            </div>
                        </dl>
                    </a>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-md mx-auto">
                    {contacts.map((contact, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                            <div className="text-4xl mb-3">{contact.icon}</div>
                            {contact.link ? (
                                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-500 hover:underline">
                                    {contact.info}
                                </a>
                            ) : (
                                <p className="text-lg font-medium text-gray-700">{contact.info}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </>

    )
}

export default Contact
