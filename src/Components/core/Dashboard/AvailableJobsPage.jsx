import React from 'react';
import { FiBriefcase, FiDollarSign, FiMapPin, FiClock } from 'react-icons/fi';

const AvailableJobsPage = () => {
  // Mock data for available jobs
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Web Solutions", location: "Remote", type: "Full-time", salary: "$60k - $80k", deadline: "2024-04-05" },
    { id: 2, title: "UX Designer", company: "Creative Studio", location: "New York", type: "Contract", salary: "$50/hr", deadline: "2024-03-30" },
    { id: 3, title: "Data Scientist", company: "AI Innovations", location: "London", type: "Internship", salary: "$3k/mo", deadline: "2024-04-10" }
  ];

  return (
    <div className="bg-richblack-900 min-h-screen p-8 text-richblack-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Available Job Opportunities
        </h1>

        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-richblack-800 p-6 rounded-xl border-2 border-richblack-700 hover:border-purple-500 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                  <p className="text-richblack-300">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {job.type}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <FiMapPin className="mr-2 text-blue-400" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="mr-2 text-green-400" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2 text-red-400" />
                  Apply by: {job.deadline}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Apply Now
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-2 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="text-center py-16">
            <FiBriefcase className="text-4xl mx-auto text-richblack-400 mb-4" />
            <p className="text-richblack-300">No job openings available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableJobsPage;