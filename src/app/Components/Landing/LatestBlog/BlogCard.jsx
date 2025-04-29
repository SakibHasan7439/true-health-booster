import Image from "next/image";
import React from "react";

const BlogCard = ({blog}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <Image 
        height={280}
        width={300}
        className="w-full h-[280px] object-cover"
        src={blog.image} // replace with your image URL
        alt="Product"/>

      <div className="p-4 space-y-2">
        <h3 className="text-base font-semibold hover:text-[#00a1df] hover:underline cursor-pointer">
          {blog.blogTitle}
        </h3>

        <p className="text-gray-500 text-sm">
          {blog.blogSubtitle}
        </p>

        <div className="flex justify-between items-center text-gray-400 text-xs pt-2 border-t border-gray-100 mt-3">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10m2 10H5a2 2 0 01-2-2V7a2 2 0 012-2h2l1-2h8l1 2h2a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-semibold text-black">{blog.postDate}</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C6.5 2 2 6.5 2 12s4.5 10 10 10
               10-4.5 10-10S17.5 2 12 2z"
              />
            </svg>
            <span className="font-semibold text-black">{blog.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
