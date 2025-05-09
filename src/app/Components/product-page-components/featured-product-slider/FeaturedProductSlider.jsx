"use client"
import useFetch from "@/hooks/useFetch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductsCard from "../../product-details/preferred-products/ProductsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProductSlider = () => {
  const {data, error, loading} = useFetch('/dummy-json-data/featuredProducts.json');
  return (
    <div className="relative px-4">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductsCard className2={"!text-[#2B2B2B]"} titleStyle={"!text-xl"} product={product}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="custom-next w-8 cursor-pointer h-8 md:w-10 md:h-10 rounded-full bg-[#32BADE] text-[#2b2b2b] flex items-center justify-center shadow-md hover:bg-[#00A5CC] transition">
            <ChevronLeft />
          </button>
        <button className="custom-prev w-8 cursor-pointer h-8 md:w-10 md:h-10 rounded-full bg-[#32BADE] text-[#2b2b2b] flex items-center justify-center shadow-md hover:bg-[#00A5CC] transition">
            <ChevronRight/>
          </button>
      </div>
    </div>
  );
};

export default FeaturedProductSlider;
