import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
    return (
        <div className="bg-gray-800 pt-[4rem] md:pt-[2rem] pb-[1rem]">
            <h1 className="heading">
            Cleint <span className="text-yellow-200">Review</span>
            </h1>
            <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
            {/* Testimonial Slider */}
            <TestimonialSlider/>
            </div>
        </div>
    );
};

export default Testimonial;
