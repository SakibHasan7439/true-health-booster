import React from 'react';
import SectionTitle from '../Components/Landing/section-title/SectionTitle';
import SectionSubtitle from '../Components/Landing/section-subtitle/SectionSubtitle';
import FeaturedProductSlider from '../Components/product-page-components/featured-product-slider/FeaturedProductSlider';

const Product = () => {
    return (
        <div className='mt-10 md:mt-15 xl:mt-[180px] bg-[#F8F8F8]'>
        <div className=' max-w-7xl mx-auto rounded-md xl:rounded-xl py-8 lg:py-12 xl:py-[70px]'>
            <SectionTitle className={"!max-w-7xl !lg:pb-6 !text-left"} title={"featured products"}/>
            <SectionSubtitle className={"!mx-0 text-left"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}/>
            <FeaturedProductSlider />
        </div>
        </div>
    );
};

export default Product;