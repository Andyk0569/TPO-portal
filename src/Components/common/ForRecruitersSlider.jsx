import React from 'react'
import HighlightText from '../core/HomePage/HighlightText';
import img1 from "../../assets/photos/company-1.png";
import img2 from "../../assets/photos/company-2.png";
import img3 from "../../assets/photos/company-3.png";
import img4 from "../../assets/photos/company-4.png";
import img5 from "../../assets/photos/company-5.png";
import img6 from "../../assets/photos/company-6.png";
import img7 from "../../assets/photos/company-7.png";
import img8 from "../../assets/photos/company-8.png";

function ForRecruitersSlider() {
  
    // Add your college's recruiter company logos here
    const recruiters = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img1, // Repeat the first logo to make it infinite
        // Add more logos here if you have them
    ];

    return (
        <div className="my-12 w-full overflow-hidden">
            <h2 className="text-center text-3xl font-bold mb-8">
                <HighlightText text={"Our Top Recruiters"} />
            </h2>
            
            {/* Infinite scrolling logos */}
            <div className="relative h-32 flex items-center overflow-hidden">
                <div className="animate-slide flex absolute gap-8">
                    {[...recruiters, ...recruiters].map((logo, index) => (
                        <div 
                            key={index}
                            className="flex items-center justify-center h-20 w-40 transform transition-all duration-800 hover:scale-110"
                        >
                            <img 
                                src={logo} 
                                alt="recruiter logo" 
                                className="h-full w-full object-contain transition-all duration-800"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Add this CSS in your global stylesheet or CSS-in-JS */}
            <style jsx>{`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide {
                    animation: slide 20s linear infinite;
                }
            `}</style>
        </div>
    );
  
}

export default ForRecruitersSlider