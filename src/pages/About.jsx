import React from 'react'
import HighlightText from '../Components/core/HomePage/HighlightText';
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../Components/core/AboutPage/Quote"
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../Components/core/AboutPage/Stats'
import LearningGrid from '../Components/core/AboutPage/LearningGrid'
import ContactFormSection from '../Components/core/AboutPage/ContactFormSection'
import Footer from '../Components/common/Footer'
import RatingSlider from '../Components/core/Ratings/RatingSlider';

const About = () => {
  return (
    <div className='mx-auto text-white'>
      {/* section 1 */}
      <section className='bg-richblack-700'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white'>
            <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Empowering Students for a 
            <HighlightText text={"Successful Career"}/>
                <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>
                  Our Training & Placement Office is dedicated to bridging the gap between students and the corporate world. 
                  We provide guidance, training, and opportunities to help students secure their dream jobs and internships.
                </p>
            </header>
            <div className='sm:h-[70px] lg:h-[150px]'></div>
            <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5'>
                <img src={BannerImage1} />
                <img src={BannerImage2} />
                <img src={BannerImage3} />
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section className='border-b border-richblack-700'>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
          <div className='h-[100px] '></div>
            <Quote/>
        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
            {/* Vision and Mission section */}
            <div className='flex flex-col items-center gap-10 lg:flex-row justify-between '>
                {/* left box */}
                <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Vision</h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
                      Our vision is to empower students with the skills, knowledge, and confidence to excel in the corporate world.
                      We strive to create a robust placement ecosystem that ensures students are industry-ready and equipped for success.
                    </p>
                </div>
                {/* right box */}
                <div>
                    <img className='shadow-[0_0_20px_0] shadow-[#FC6767]'  src={FoundingStory} />
                </div>
            </div>

            {/* Training and Placement Goals */}
            <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
                {/* left box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Mission</h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
                      We are committed to providing students with top-notch training, industry exposure, and recruitment opportunities. 
                      Our mission is to build strong partnerships with recruiters, conduct skill development workshops, and guide students towards fulfilling careers.
                    </p>
                </div>

                {/* right box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                        Placement Assistance
                    </h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>
                      We offer resume-building sessions, mock interviews, and career counseling to help students prepare for job placements. 
                      Our TPO cell connects students with recruiters, ensuring they find the right opportunities to launch their careers.
                    </p>
                </div>
            </div>
        </div>
      </section>   

      {/* section 4 */}
      <StatsComponent/>  
      
      {/* section 5 */}
      <section className='mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[140px] mt-16 '>
        <LearningGrid />
        <ContactFormSection />
      </section>

      <section>
      <div className=' mb-16 mt-3 w-screen'>
        <h2 className='text-center text-4xl font-semibold mt-8 text-richblack-5 mb-5'>Reviews from other learners</h2>
        <RatingSlider />
      </div>
      </section>

    </div>
  )
}

export default About
