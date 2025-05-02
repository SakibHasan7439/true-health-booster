"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import Image from "next/image";
import { Navigation } from "swiper/modules";

const ImageSlider = ({ data }) => {
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    if (data?.images?.length > 0) {
      setMainImage(data?.images[0]);
    }
  }, [data]);

  const handleThumbnailClick = (image) => {
    setMainImage(image); 
  };

  return (
    <div>
       <div className="w-full flex sm:flex-row flex-col-reverse md:gap-6 gap-3 mb-4">
        <div className="hidden sm:block md:h-[500px]">
          <Swiper
            watchSlidesProgress
            slidesPerView={4}
            spaceBetween={12}
            mousewheel={true}
            direction="vertical"
            navigation={true}
            modules={[Navigation]}
            className="md:!h-[500px]"
          >
            {data?.images?.map((image, index) => (
              <SwiperSlide key={index} className="!w-[90px] !h-[80px]">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="cursor-pointer object-fill rounded-md h-full w-full bg-[#f2f2f2] border border-primary"
                  onClick={() => handleThumbnailClick(image)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="sm:hidden">
          <Swiper
            watchSlidesProgress
            slidesPerView={4}
            spaceBetween={8}
            navigation={true}
            modules={[Navigation]}
            className="w-full"
          >
            {data?.images?.map((image, index) => (
              <SwiperSlide key={index} className="w-full">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={500}
                  height={500}
                  className="cursor-pointer object-fill rounded-md h-[80px]  w-full bg-[#f2f2f2] border border-primary"
                  onClick={() => handleThumbnailClick(image)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full xl:h-[500px] lg:h-[400px]">
          {mainImage ? (
            <Image
              src={mainImage}
              alt="Product Main Image"
              width={500}
              height={500}
              className="rounded-lg lg:h-full w-full h-[300px] sm:h-[400px] md:h-[550px]  border object-fill bg-[#f2f2f2]"
            />
          ) : (
            <div className="w-full h-full bg-[#f2f2f2] flex justify-center items-center text-gray-500">
              No image available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;