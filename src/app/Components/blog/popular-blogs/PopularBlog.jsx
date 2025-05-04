"use client"

import useFetch from "@/hooks/useFetch";
import BlogCard from "../../Landing/latest-blog/BlogCard";

const PopularBlog = () => {
    const {data, error, loading} = useFetch('/dummy-json-data/popularBlog.json');
    console.log(data);
    return (
        <div className="grid pb-6 md:pb-12 xl:pb-26 grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
            {
                data.map((product) => <BlogCard descriptionSpacing={"!px-2 md:!px-5"} key={product?.id} blog={product}/>)
            }
        </div>
    );
};

export default PopularBlog;