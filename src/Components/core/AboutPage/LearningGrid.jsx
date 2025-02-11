import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
      order: -1,
      heading: "Empowering Students for",
      highlightText: "Career Success",
      description:
        "Our TPO Portal connects students with top recruiters, providing them with job-relevant training, internships, and placement opportunities to build a successful career.",
      BtnText: "Explore Opportunities",
      BtnLink: "/placements",
    },
    {
      order: 1,
      heading: "Industry-Aligned Curriculum",
      description:
        "We ensure students are equipped with industry-relevant skills through expert-led training programs and workshops tailored to employer needs.",
    },
    {
      order: 2,
      heading: "Skill Development & Training",
      description:
        "Our TPO Portal offers skill-enhancement programs to bridge the gap between academics and industry expectations, boosting employability.",
    },
    {
      order: 3,
      heading: "Certifications & Achievements",
      description:
        "Earn industry-recognized certifications that add value to your resume and enhance your job prospects.",
    },
    {
      order: 4,
      heading: "Automated Resume Review",
      description:
        "Our AI-powered system evaluates resumes and provides insights to improve your profile for better job opportunities.",
    },
    {
      order: 5,
      heading: "Job-Ready Graduates",
      description:
        "We prepare students to be job-ready with real-world exposure, mock interviews, and guidance from industry experts.",
    },
  ];

const LearningGrid = () => {
  return (
    <div className='grid grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"} ${
              card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
            } ${card.order === 3 && "lg:col-start-2"} ${card.order < 0 && "bg-transparent"}`}
          >
            {card.order < 0 ? (
              <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                <div className='text-4xl font-semibold'>
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className='font-medium'>{card.description}</p>
                <div className='w-fit mt-4'>
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className='flex flex-col gap-8 p-7'>
                <h1 className='text-richblack-5 text-lg'>{card.heading}</h1>
                <p className='text-richblack-300 font-medium'>{card.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;