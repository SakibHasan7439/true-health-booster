import React from 'react';
import AboutHero from '../Components/about-us-page/about-us-hero/AboutHero';
import UniqueSells from '../Components/about-us-page/unique-selling/UniqueSells';
import WhyTruemed from '../Components/Landing/why-truemed/WhyTruemed';
import LatestBlog from '../Components/Landing/latest-blog/LatestBlog';
import JoinUs from '../Components/Landing/join-us/JoinUs';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';

const AboutUs = () => {
    return (
        <div>
            <AboutHero />
            <UniqueSells />
            <WhyTruemed 
                titleAlign={"!text-left !max-w-[1280px]"} 
                subTitleStyle={"!max-w-[1280px] text-left text-[#11B091]"}
            />
            <LatestBlog />
            <JoinUs />
        </div>
    );
};

export default AboutUs;