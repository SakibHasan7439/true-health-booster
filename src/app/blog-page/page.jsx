import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import SectionTitle from '../Components/Landing/section-title/SectionTitle';
import PageSectionSubtitle from '../Components/product-details/page-section-subtitle/PageSectionSubtitle';
import PopularBlog from '../Components/blog/popular-blogs/PopularBlog';
import LatestBlogsSection from '../Components/blog/latest-blogs-section/LatestBlogsSection';
import OurProductsSection from '../Components/blog/our-product-section/OurProductsSection';
import JoinUs from '../Components/Landing/join-us/JoinUs';

const BlogPage = () => {
    return (
        <div className='max-w-7xl mx-auto px-2 xl:px-0'>
            <div>
                <PageBreadcrumb 
                    route={"blog-page"}
                    title={"Blogs"}
                    className={"lg:!pb-5 xl:!pb-10 !pl-0"}
                    
                />
                <SectionTitle 
                    className={"!text-left !max-w-[1280px] lg:!pb-6 xl:!pb-10"}
                    title={"most popular blogs"}
                />
                <PageSectionSubtitle 
                    className={"pb-6 lg:pb-8 xl:pb-14"}
                    subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}
                />
            </div>
            <PopularBlog />
            <div>
            <SectionTitle 
                className={"!text-left !max-w-[1280px] lg:!pb-6 xl:!pb-10"}
                title={"latest blogs"}
            />
            <PageSectionSubtitle 
                className={"pb-6 lg:pb-8 xl:pb-14"}
                subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}
            />
            </div>
            <LatestBlogsSection />
            <SectionTitle title={"explore our product"} className={"!text-left !max-w-[1280px] lg:!pb-6 xl:!pb-10"}/>
            <OurProductsSection />
            <JoinUs />
        </div>
    );
};

export default BlogPage;