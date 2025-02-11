import React from 'react';
import { FiDownload, FiUser, FiTarget, FiBookOpen, FiBriefcase, FiCheckCircle, FiAward, FiUsers, FiFileText } from 'react-icons/fi';
import { Navigate } from 'react-router';
import IconBtn from '../../common/IconBtn';
import HighlightText from '../HomePage/HighlightText';

const ResumeTemplate = () => {
    return (
        <div className="bg-gray-900 min-h-screen p-8 text-gray-100 overflow-y-auto">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-12 text-center">
                <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent animate__animated animate__fadeIn">
                    <HighlightText text={"Professional Resume Builder"} /> 
                </h1>
                <p className="text-xl text-richblack-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                    Craft your perfect resume with our interactive step-by-step guide
                </p>
            </div>

            <div className="max-w-6xl bg-richblack-800 font-medium text-richblack-5 mx-auto mt-16 p-8 bg-gray-800 rounded-2xl border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
                <h2 className="text-3xl font-semibold mb-6 text-gradient">Downloadable Resume Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
                    {templates.map((template, index) => (
                        <div key={index} className="bg-richblack-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                            <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                            <p className="text-gray-300 mb-4">{template.description}</p>
                            {/* <a href={template.link} className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300 ease-in-out">
                                <FiDownload className="mr-2" />
                                Download
                            </a> */}
                            <IconBtn
                                text="Download"
                                onclick={() => {
                                    Navigate()
                                }} >
                            </IconBtn>
                        </div>
                    ))}
                </div>
            </div>


            {/* Steps Section */}
            <div className="max-w-6xl mx-auto mb-12 text-center mt-10">
                <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent animate__animated animate__fadeIn">
                    <HighlightText text={"Steps For You..!"} /> 
                </h1>
                <p className="text-md text-richblack-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                    Craft your perfect resume with this step-by-step guide
                </p>
            </div>
            <div className="max-w-6xl mx-auto relative mt-10">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-blue-600 opacity-30 animate-pulse"></div>
                </div>

                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 mb-16 animate__animated animate__fadeInUp animate__delay-1s">
                        {/* Step Container */}
                        <div className={`group relative bg-richblack-5 p-8 rounded-2xl border-2 border-gray-700 hover:border-purple-500 transition-all duration-500 ease-in-out w-1/2 ${index % 2 === 0 ? 'ml-0' : 'ml-auto'} transform hover:scale-[1.05] shadow-lg`}>
                            <div className={`absolute bg-richblack-900 top-6 ${index % 2 === 0 ? '-left-12' : '-right-12'} w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg border border-richblack-25 `}>
                                {index + 1}
                            </div>
                            <h3 className={`text-2xl font-semibold mb-4 flex items-center ${step.textColor} animate__animated animate__fadeIn animate__delay-1s`}>
                                {step.icon}
                                {step.title}
                            </h3>
                            <p className="text-gray-200 text-lg mb-4">{step.description}</p>
                            {step.example && (
                                <div className="mt-4 p-4 bg-gray-700 rounded-lg border-l-4 border-purple-400">
                                    <h4 className="font-semibold text-gray-100 mb-2">Example:</h4>
                                    <p className="text-gray-300">{step.example}</p>
                                </div>
                            )}
                        </div>

                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div className={`absolute top-full ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} transform -translate-x-1/2 h-16 w-1 bg-gradient-to-b from-gray-700 to-blue-500`}>
                                <div className="h-full bg-gradient-to-b from-purple-600 to-blue-600 animate-connectorPulse"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Downloadable Templates Section */}
            
        </div>
    );
};

const steps = [
    {
        title: 'Choose a Template',
        description: 'Select a resume template that best fits your style and profession.',
        icon: <FiFileText className="mr-2 text-purple-400" />,
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-400',
    },
    {
        title: 'Add Personal Information',
        description: 'Include your name, contact details, and a professional summary.',
        icon: <FiUser className="mr-2 text-purple-400" />,
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-400',
    },
    {
        title: 'List Your Education',
        description: 'Detail your educational background, including degrees and certifications.',
        icon: <FiBookOpen className="mr-2 text-purple-400" />,
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-400',
    },
    {
        title: 'Highlight Work Experience',
        description: 'Outline your previous job roles, responsibilities, and achievements.',
        icon: <FiBriefcase className="mr-2 text-purple-400" />,
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-400',
    },
    {
        title: 'Showcase Skills',
        description: 'List relevant skills that make you a strong candidate for the job.',
        icon: <FiTarget className="mr-2 text-purple-400" />,
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-400',
    },
    {
        title: 'Add Additional Sections',
        description: 'Include sections for certifications, awards, or volunteer work if applicable.',
        icon: <FiAward className="mr-2 text-purple-400" />,
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-400',
    },
    {
        title: 'Review and Edit',
        description: 'Proofread your resume for any errors and ensure it is well-formatted.',
        icon: <FiCheckCircle className="mr-2 text-purple-400" />,
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-400',
    },
    {
        title: 'Download and Share',
        description: 'Once satisfied, download your resume and share it with potential employers.',
        icon: <FiUsers className="mr-2 text-purple-400" />,
        bgColor: 'bg-blue-500',
        textColor: 'text-blue-400',
    },
];

const templates = [
    {
        title: 'Modern Resume',
        description: 'A sleek and professional design for any job application.',
        link: '#',
    },
    {
        title: 'Creative Resume',
        description: 'A colorful and artistic layout to showcase your creativity.',
        link: '#',
    },
    {
        title: 'Simple Resume',
        description: 'A clean and straightforward template for a minimalist approach.',
        link: '#',
    },
];

export default ResumeTemplate;
