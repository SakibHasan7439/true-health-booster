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
        <div className="hidden sm:block md:h-[350px] lg:h-[500px] pt-4">
          <Swiper
            watchSlidesProgress
            slidesPerView={4}
            spaceBetween={12}
            mousewheel={true}
            direction="vertical"
            className="md:h-[350px] lg:h-[500px] !p-[2px] xl:h-[600px] object-cover"
          >
            {data?.images?.map((image, index) => (
              <SwiperSlide key={index} className="!w-[90px] xl:!w-[100] xl:!h-[100] !h-[80px] xl:!mb-5 lg:!h-[50px] md:!h-[55px] md:!w-[50px]">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className={`cursor-pointer object-fill rounded-md h-full w-full ${ mainImage === image ? 'border-[#32BADE] border-l-[#32BADE] p-1 ring-2 ring-[#32BADE]' : 'border-[#f3f3f3]'}`}
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
                  height={614}
                  className="cursor-pointer object-fill rounded-md h-[80px]  w-full bg-[#f2f2f2] border border-primary"
                  onClick={() => handleThumbnailClick(image)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full xl:h-[600px] md:h-[400px]">
          {mainImage ? (
            <Image
              src={mainImage}
              alt="Product Main Image"
              width={500}
              height={614}
              className="rounded-lg lg:h-full w-full h-[300px] sm:h-[400px] md:h-[350px] border object-fill bg-[#f2f2f2]"
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