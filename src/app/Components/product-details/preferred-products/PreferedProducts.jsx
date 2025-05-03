"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import PageSectionSubtitle from "../page-section-subtitle/PageSectionSubtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import ProductsCard from "./ProductsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PreferredProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/dummy-json-data/preferredProduct.json");
      const data = await res.json();
      setProducts(data?.preferredProducts);
    };
    fetchProducts();
  }, []);
  
  return (
    <div className="pb-12 lg:pb-20 xl:pb-50 px-2 xl:px-0 max-w-7xl mx-auto">
      <SectionTitle
        title={"Most Preferred Products"}
        className={"max-w-[1280px] !text-left !pb-4 xl:!pb-6"}
      />
      <PageSectionSubtitle
        className={"pb-4 lg:pb-7 xl:pb-10"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        }
      />

      <div className="relative">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: {slidesPerView: 4}
            // 1224: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          freeMode={true}
          navigation={{
            nextEl: ".preferred-next",
            prevEl: ".preferred-prev",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product?.id}>
              <ProductsCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Arrow */}
        <div className="preferred-prev absolute xl:-left-5 left-0 top-1/3 -translate-y-1/2 z-10">
          <button className="w-8 cursor-pointer h-8 md:w-10 md:h-10 rounded-full bg-[#00BFFF] text-white flex items-center justify-center shadow-md hover:bg-[#00A5CC] transition">
            <ChevronLeft />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="preferred-next absolute xl:-right-6 right-0 top-1/3 -translate-y-1/2 z-10">
          <button className="w-8 cursor-pointer h-8 md:w-10 md:h-10 rounded-full bg-[#00BFFF] text-white flex items-center justify-center shadow-md hover:bg-[#00A5CC] transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferredProducts;
