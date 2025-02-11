import React from 'react';
import { FaBuilding, FaSearchDollar, FaChartLine, FaRegHandshake, FaUser , Graduate } from 'react-icons/fa';
import { MdEngineering, MdComputer, MdWork } from 'react-icons/md';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import ForRecruitersSlider from '../Components/common/ForRecruitersSlider';

function ForRecruiters() {
  // Sample data - replace with actual statistics
  const placementStats = {
    totalStudents: 1500,
    placementRate: '92%',
    averagePackage: '8.5 LPA',
    topPackage: '42 LPA'
  };

  const topStudents = [
    { name: 'Rahul Sharma', department: 'Computer', skills: ['AI/ML', 'Python', 'Cloud'], ctc: '18 LPA' },
    { name: 'Priya Patel', department: 'Mechanical', skills: ['CAD', 'Thermodynamics', 'IoT'], ctc: '14 LPA' },
    { name: 'Amit Joshi', department: 'Electronics', skills: ['Embedded Systems', 'VLSI', 'Python'], ctc: '16 LPA' },
  ];

  const recruitmentProcess = [
    { step: 'Step 1', title: 'Submit Requirements', description: 'Share your hiring needs' },
    { step: 'Step 2', title: 'Access Talent Pool', description: 'Review student profiles' },
    { step: 'Step 3', title: 'Campus Engagement', description: 'Conduct tests/interviews' },
    { step: 'Step 4', title: 'Final Selection', description: 'Make offers to candidates' },
  ];

  return (
    <div className="min-h-screen bg-richblack-900 text-richblack-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-richblack-800 to-richblack-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            <HighlightText text={"Partner with Future Innovators"} />
          </h1>
          <p className="text-xl text-richblack-300 mb-12">
            Connect with India's brightest engineering talent from premier institutions
          </p>
          <div className="flex justify-center gap-4">
            <CTAButton active={true} linkto={"/signup"}>
              Schedule Campus Drive
            </CTAButton>
            <CTAButton active={false} linkto={"/contact"}>
              Request Talent Catalog
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Recruit With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ValuePropositionCard 
              icon={<FaUser className="text-4xl mb-4 text-teal-300" />}
              title="Premium Talent Pool"
              description="Access 1500+ pre-vetted candidates across engineering disciplines"
            />
            <ValuePropositionCard 
              icon={<FaRegHandshake className="text-4xl mb-4 text-blue-300" />}
              title="Streamlined Process"
              description="End-to-end recruitment support with dedicated coordination"
            />
            <ValuePropositionCard 
              icon={<FaChartLine className="text-4xl mb-4 text-pink-300" />}
              title="Proven Success"
              description="92% placement rate with 300+ hiring partners"
            />
          </div>

          {/* Placement Stats */}
          <div className="bg-richblack-800 rounded-2xl p-12 mb-20">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <FaBuilding className="text-teal-300" />
              Placement Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard 
                title="Total Students" 
                value={placementStats.totalStudents} 
                icon={<MdEngineering className="text-3xl" />}
              />
              <StatCard 
                title="Placement Rate" 
                value={placementStats.placementRate}
                icon={<MdWork className="text-3xl" />}
              />
              <StatCard 
                title="Average Package" 
                value={placementStats.averagePackage}
                icon={<FaSearchDollar className="text-3xl" />}
              />
              <StatCard 
                title="Top Package" 
                value={placementStats.topPackage}
                icon={<MdComputer className="text-3xl" />}
              />
            </div>
          </div>

          {/* For Recruiters Slider */}
          <ForRecruitersSlider />

          {/* Featured Students */}
          <section className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <FaUser className="text-blue-300" />
              Featured Talent
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topStudents.map((student, index) => (
                <div key={index} className="bg-richblack-800 p-6 rounded-xl hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-medium">{student.name}</h4>
                      <p className="text-richblack-300">{student.department} Engineering</p>
                    </div>
                    <span className="bg-teal-300 font-extrabold text-richblack-100 underline px-3 py-1 rounded-full text-sm">
                      {student.ctc}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill, i) => (
                      <span key={i} className="bg-richblack-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recruitment Process */}
          <section className="mb-20">
            <h3 className="text-3xl font-semibold mb-12 text-center">
              <HighlightText text={"Simple 4-Step Hiring Process"} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {recruitmentProcess.map((step, index) => (
                <div key={index} className="text-center p-6 bg-richblack-800 rounded-xl">
                  <div className="w-16 h-16 bg-teal-300 rounded-full flex items-center justify-center text-2xl font-bold text-richblack-100 mx-auto mb-4">
                    { "Step:" + (index + 1)}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-richblack-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-richblack-800 to-richblack-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Hiring Now</h2>
            <p className="text-richblack-300 mb-8">Join our network of 300+ satisfied recruiters</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <CTAButton active={true} linkto={"/signup"}>
                Post Job Requirements
              </CTAButton>
              <CTAButton active={false} linkto={"/contact"}>
                Schedule Consultation
              </CTAButton>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}



// Updated ValuePropositionCard component
const ValuePropositionCard = ({ icon, title, description }) => (
  <div className="bg-richblack-800 p-8 rounded-xl hover:bg-richblack-700 transition-colors">
    {icon}
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-richblack-300 leading-relaxed">{description}</p>
  </div>
);

// Updated StatCard component
const StatCard = ({ icon, title, value }) => (
  <div className="text-center p-6">
    <div className="text-teal-300 mb-4">{icon}</div>
    <div className="text-3xl font-bold mb-2">{value}</div>
    <div className="text-richblack-300 uppercase text-sm tracking-wide">{title}</div>
  </div>
);

//export default 
export default ForRecruiters
