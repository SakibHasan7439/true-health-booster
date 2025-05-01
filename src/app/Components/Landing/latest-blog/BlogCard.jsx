import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogCard = ({blog}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <Image 
        height={346}
        width={424}
        className="w-full h-[346px] mb-6 object-cover"
        src={blog.image} // replace with your image URL
        alt="Product"/>

      <div className="px-5 pb-5">
        <h3 className="text-base md:text-[16px] lg:text-[18px] pb-3 font-semibold hover:text-[#00a1df] cursor-pointer">
          {blog.blogTitle}
        </h3>

        <p className="text-secondary-color text-sm md:text-[15px] lg:text-[18px] md:leading-7">
          {blog.blogSubtitle}
        </p>

        <div className="flex gap-1 justify-between items-center text-gray-400 text-xs pt-2 border-t border-gray-100 mt-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-[14px] h-[14px] text-primary-color"/>
            <span className="font-semibold md:text-[11px] lg:text-[16px] text-primary-color">{blog.postDate}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-[14px] h-[14px] text-primary-color" />
            <span className="font-semibold text-primary-color md:text-[11px] lg:text-[16px]">{blog.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
