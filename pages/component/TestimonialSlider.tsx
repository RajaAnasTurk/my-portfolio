import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
};

const TestimonialSlider = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
            >
            {/* Client Review */}
            <ClientReview 
             image="/images/c1.jpg" 
             name="william son" 
             role="Web Developer"
             description="Crafting digital magic with lines of code, I blend creativity and technology 
             to sculpt captivating web experiences that leave a lasting impression"
             />
            <ClientReview 
             image="/images/c2.jpg" 
             name="Joe Doe" 
             role="Front End Developer"
             description="Crafting captivating user experiences with pixels and code, I seamlessly 
              creativity with technical finesse to breathe life into web interfaces"
             />             
            <ClientReview 
             image="/images/c3.jpg" 
             name="Smith" 
             role="React.js Developer"
             description="User experiences with ReactJS magic.
             Transforming complex ideas into elegant, interactive web solutions"
             />
            <ClientReview 
             image="/images/c4.jpg" 
             name="Arjun Kumar" 
             role="Next.js Developer"
             description="Hey there, I'm a Next.js whiz, weaving code magic to craft seamless web 
             experiences. Let's turn your ideas into reality with speed and precision!"
             />

        </Carousel>
    );
};

export default TestimonialSlider;