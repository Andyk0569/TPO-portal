import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiClock, FiCheck, FiX } from 'react-icons/fi';

const AppliedJobsPage = () => {
  // Mock data for applied jobs
  const appliedJobs = [
    {
      id: 1,
      company: "Tech Innovators",
      position: "Frontend Developer",
      appliedDate: "2024-03-15",
      status: "Accepted",
      location: "Remote"
    },
    {
      id: 2,
      company: "Data Corp",
      position: "Data Analyst",
      appliedDate: "2024-03-18",
      status: "In Review",
      location: "New York"
    },
    {
      id: 3,
      company: "Design Studio",
      position: "UI/UX Designer",
      appliedDate: "2024-03-20",
      status: "Rejected",
      location: "London"
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Accepted':
        return (
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full flex items-center w-fit">
            <FiCheck className="mr-2" /> Accepted
          </span>
        );
      case 'Rejected':
        return (
          <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full flex items-center w-fit">
            <FiX className="mr-2" /> Rejected
          </span>
        );
      default:
        return (
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full flex items-center w-fit">
            <FiClock className="mr-2" /> In Review
          </span>
        );
    }
  };

  return (
    <div className="bg-richblack-900 min-h-screen p-8 text-richblack-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Your Job Applications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appliedJobs.map((job) => (
            <div key={job.id} className="bg-richblack-800 p-6 rounded-xl border border-richblack-700 hover:border-purple-400 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{job.position}</h2>
                  <p className="text-richblack-300">{job.company}</p>
                </div>
                {getStatusBadge(job.status)}
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-richblack-300">
                  <FiMapPin className="mr-2 text-purple-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-richblack-300">
                  <FiCalendar className="mr-2 text-blue-400" />
                  Applied: {job.appliedDate}
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="bg-yellow-50 hover:scale-95 transition-all duration-200 px-4 py-2 rounded-lg text-richblack-800 font-bold">
                  View Details
                </button>
                <button className="bg-richblack-900 hover:scale-95 transition-all duration-200 px-4 py-2 rounded-lg text-richblack-5 font-bold border">
                  Withdraw
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {appliedJobs.length === 0 && (
          <div className="text-center py-16">
            <FiBriefcase className="text-4xl mx-auto text-richblack-400 mb-4" />
            <p className="text-richblack-300">No job applications found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobsPage;