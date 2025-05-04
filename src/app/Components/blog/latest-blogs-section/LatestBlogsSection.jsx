"use client"
import useFetch from '@/hooks/useFetch';
import React from 'react';
import BlogCard from '../../Landing/latest-blog/BlogCard';
const LatestBlogsSection = () => {
    const {data, error, loading} = useFetch('/dummy-json-data/latestBlog.json');
    return (
        <div className='grid pb-8 lg:pb-15 xl:pb-35 grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 xl:gap-6'>
            {
                data.map((blog) => <BlogCard 
                    key={blog?.id} 
                    blog={blog}
                    descriptionClass={"!text-[#11B091]"}
                    descriptionSpacing={"!px-2 md:!px-5"}
                />)
            }
        </div>
    );
};

export default LatestBlogsSection;