import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChalkboardTeacher, FaBook, FaUserGraduate, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { MdInterests, MdWorkspaces } from 'react-icons/md';
import campusImage from '../assets/Images/campus-life.jpg'; // Add your own images
import interviewImage from '../assets/Images/mock-interview.jpg';
import HighlightText from '../Components/core/HomePage/HighlightText';
import Button from '../Components/core/HomePage/Button';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function ForStudents() {
  // Sample data
  const recruitmentAnnouncements = [
    { company: "Google", date: "2024-04-10", role: "Software Engineer" },
    { company: "Microsoft", date: "2024-04-15", role: "Cloud Specialist" },
    { company: "Tesla", date: "2024-04-20", role: "Automation Engineer" },
  ];

  return (
    <div className="min-h-screen bg-richblack-900 text-richblack-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden border ">
        <div className="absolute inset-0">
          <img src={campusImage} alt="Campus Life" className="w-full h-full object-cover opacity-40" />
        </div>
        <motion.div 
          initial="initial"
          animate="animate"
          transition={fadeIn.transition}
          variants={fadeIn}
          className="relative text-center z-10"
        >
          <div className=' border p-5 rounded-xl bg-black bg-opacity-50' >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              <HighlightText text={"Student Success Hub"} />
            </h1>
            <p className="text-xl text-richblack-300 max-w-2xl mx-auto">
              Your integrated platform for academic growth and career development
            </p>
          </div>
        </motion.div>
      </section>

      {/* Recruitment Announcements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-300">
              <FaRegArrowAltCircleRight className="text-4xl" />
              Upcoming Recruitment Drives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recruitmentAnnouncements.map((announcement, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-richblack-800 p-6 rounded-2xl border-2 border-richblack-700 hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{announcement.company}</h3>
                    <span className="text-sm bg-blue-300 text-richblack-900 px-3 py-1 rounded-full">
                      {announcement.date}
                    </span>
                  </div>
                  <p className="text-richblack-300">{announcement.role}</p>
                  <div className="mt-4 flex items-center gap-2 text-blue-300">
                    <span className="text-sm">View Details</span>
                    <FaRegArrowAltCircleRight />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Roadmap */}
          <motion.div {...fadeIn} className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-pink-300">
              Your Academic Journey
            </h2>
            <div className="relative h-64 bg-richblack-800 rounded-2xl p-8">
              <div className="flex justify-between items-center">
                {['Year 1', 'Year 2', 'Year 3', 'Year 4'].map((year, index) => (
                  <motion.div 
                    key={year}
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-gradient-to-br from-blue-300 to-teal-300 rounded-xl flex items-center justify-center text-richblack-900 font-bold cursor-pointer"
                  >
                    {year}
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1 w-full bg-richblack-700" />
              </div>
            </div>
          </motion.div>

          {/* Interactive Courses Grid */}
          <motion.div {...fadeIn} className="my-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-teal-300">
              <FaBook className="text-4xl" />
              Skill Development Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['AI/ML', 'Cloud Computing', 'Data Science', 'IoT'].map((course, index) => (
                <motion.div 
                  key={course}
                  whileHover={{ scale: 1.05 }}
                  className="bg-richblack-800 p-6 rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="h-40 bg-richblack-700 rounded-xl mb-4 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2">{course}</h3>
                  <div className="flex justify-between items-center text-richblack-300">
                    <span>4 Weeks</span>
                    <button className="bg-teal-300 text-richblack-900 px-4 py-2 rounded-lg hover:bg-teal-200 transition-all">
                      Enroll
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock Interviews */}
          <motion.div {...fadeIn} className="my-16">
            <div className="bg-gradient-to-r from-richblack-800 to-richblack-700 rounded-2xl p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src={interviewImage} 
                  alt="Mock Interview" 
                  className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-green-300">Interview Mastery Program</h3>
                <div className="space-y-4 mb-8">
                  {['Technical Prep', 'HR Simulations', 'Coding Tests', 'Group Discussions'].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-300 text-richblack-50 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <button className= "bg-yellow-50 text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-95 transition-all duration-200">
                  Schedule Session
                  <FaRegArrowAltCircleRight />
                </button>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ForStudents;