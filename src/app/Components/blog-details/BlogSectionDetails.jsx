"use client";
import useFetch from "@/hooks/useFetch";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import SectionTitle from "../Landing/section-title/SectionTitle";
import { poppins, signika } from "@/app/layout";

const BlogSectionDetails = () => {
  const { data, error, loading } = useFetch(
    "/dummy-json-data/blogDetails.json"
  );
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto text-primary-color px-2 xl:px-0">
      {data.map((detail) => (
        <div key={detail?.id} className="mb-10 lg:mb-16 xl:mb-[140px]">
          <Image
            src={detail?.productImage}
            width={1280}
            height={460}
            className="h-[200px] md:h-[240px] xl:h-[460px] mb-4 lg:mb-6 xl:mb-10"
            alt="blog detail image"
          />
          <div className="flex mb-4 lg:mb-6 gap-4 lg:gap-10 xl:gap-[125px] items-center text-gray-400 text-xs">
            <div className="flex gap-1 lg:items-center">
              <Calendar className="w-[14px] h-[14px] text-primary-color" />
              <span className="font-medium text-[11px] lg:text-[13px] xl:text-[16px] text-primary-color">
                {detail?.date}
              </span>
            </div>

            <div className="flex gap-1 lg:items-center">
              <Clock className="w-[14px] h-[14px] text-primary-color" />
              <span className="font-medium text-primary-color text-[11px] lg:text-[13px] xl:text-[16px]">
                {detail?.duration}
              </span>
            </div>
          </div>
          <SectionTitle
            title={detail?.title}
            className={"!max-w-[1280px] !text-left !pb-4 lg:!pb-6"}
          />
          <p className="lg:leading-6 mb-4 lg:mb-6 xl:mb-10 text-[12px] xl:text-[16px]">
            {detail?.description}
          </p>
          <h4 className="text-xl lg:text-xl mb-4 font-semibold lg:mb-6 xl:mb-10">
            {detail?.subTitle}
          </h4>
          <p className="lg:leading-6 mb-5 lg:mb-10 xl:mb-14 text-[12px] xl:text-[16px]">
            {detail?.descriptionTwo}
          </p>
          <div className="grid grid-cols-2 mb-5 lg:mb-10 xl:mb-14 gap-2 md:gap-4 xl:gap-6">
            <Image
              width={648}
              height={440}
              src={detail?.productSubImages?.imageTwo}
              className="h-[170px] rounded-lg lg:h-[300px] object-cover xl:h-[440px] md:h-[250px] xl:w-[648px]"
              alt="product image"
            />
            <Image
              width={648}
              height={440}
              src={detail?.productSubImages?.imageOne}
              className="rounded-lg  h-[170px] md:h-[250px] lg:h-[300px] object-cover xl:h-[440px] xl:w-[648px]"
              alt="product image"
            />
          </div>
          <p className="lg:leading-6 text-[12px] xl:text-[16px]">
            {detail?.descriptionThree}
          </p>
        </div>
      ))}

      {/* suggest posts */}
      <div>
          <h2 className={`${signika.className} mb-5 lg:mb-10 xl:mb-14 text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-semibold`}>
            Suggest Post
          </h2>
          
      </div>
    </div>
  );
};

export default BlogSectionDetails;
