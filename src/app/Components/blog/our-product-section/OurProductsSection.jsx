"use client";
import useFetch from "@/hooks/useFetch";
import OurProductCard from "./OurProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const OurProductsSection = () => {
  const { data, error, loading } = useFetch(
    "/dummy-json-data/ourProducts.json"
  );
  return (
      <div className="relative pb-6 md:pb-12 xl:pb-35">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          className="mySwiper"
          breakpoints={{
            375: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: ".swiper-button-prev-product",
            nextEl: ".swiper-button-next-product",
          }}
          modules={[Navigation]}
        >
          {data.map((product) => (
            <SwiperSlide key={product?.id}>
                <OurProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* custom navigation button */}
        <div className="absolute -top-12 xl:-top-19 right-2 z-10 flex items-center space-x-4">
        <button className="swiper-button-prev-product bg-white rounded-full p-2 text-gray-400 hover:bg-gray-100 cursor-pointer border border-[#32BADE] transition-colors duration-300">
          <ArrowLeft className="h-5 w-5 text-[#32BADE]" />
        </button>
        <button className="swiper-button-next-product cursor-pointer border bg-[#32BADE] text-white rounded-full p-2 transition-colors duration-300">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      </div>
  );
};

export default OurProductsSection;
