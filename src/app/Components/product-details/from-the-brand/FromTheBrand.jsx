"use client";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import PageSectionSubtitle from "../page-section-subtitle/PageSectionSubtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FromTheBrand = () => {
  return (
    <div className="section-bottom-spacing max-w-7xl mx-auto relative">
      <div className="pb-6 px-2 xl:px-0 lg:pb-10 xl:pb-14">
        <SectionTitle
          className={"max-w-[1280px] lg:!pb-5 text-left"}
          title={"from the brand"}
        />
        <PageSectionSubtitle
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
          }
        />
      </div>

      {/* Swiper with custom navigation */}
      <Swiper
        navigation={{
          nextEl: ".from-brand-next",
          prevEl: ".from-brand-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={900}
            height={600}
            src={"/images/fromBrand1.png"}
            className="w-full h-[230px] md:h-[300px] lg:h-[500px] xl:h-[600px]"
            alt="slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={800}
            height={600}
            src={"/images/fromBrand1.png"}
            className="w-full h-[230px] md:h-[300px] lg:h-[500px] xl:h-[600px]"
            alt="slider image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={800}
            height={600}
            src={"/images/fromBrand1.png"}
            className="w-full h-[230px] md:h-[300px] lg:h-[500px] xl:h-[600px]"
            alt="slider image"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <button className="from-brand-prev custom-nav-btn"><ChevronLeft /></button>
      <button className="from-brand-next custom-nav-btn"><ChevronRight /></button>

      <style>
        {`
          .custom-nav-btn {
            background-color: #73D6ED;
            padding: 10px;
            border-radius: 100%;
            color: black;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }

          .from-brand-prev {
            left: 10px;
          }

          .from-brand-next {
            right: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default FromTheBrand;
