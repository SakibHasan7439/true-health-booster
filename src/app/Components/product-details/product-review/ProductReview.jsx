"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { poppins } from "@/app/layout";

const ProductReview = () => {
  const ratings = [50, 40, 30, 20, 10];
  const reviews = [
    {
      id: 1,
      reviewer_name: "Mike Johnson",
      image: "https://i.ibb.co.com/4RmqGnsC/image-22.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames. Porttitor et sagittis egestas vitae metus, odio tristique amet, duis. Nunc tortor elit aliquet quis in mauris.",
      review_date: "14 Jan 2025",
    },

    {
      id: 2,
      reviewer_name: "Mike Johnson",
      image: "https://i.ibb.co.com/4RmqGnsC/image-22.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames. Porttitor et sagittis egestas vitae metus, odio tristique amet, duis. Nunc tortor elit aliquet quis in mauris.",
      review_date: "14 Jan 2025",
    },
  ]; // percentage values for stars
  const reviewImages = [
    "https://i.ibb.co.com/b50QHRQ7/image-21.png",
    "https://i.ibb.co.com/DPpbdmP7/image-20.png",
    "https://i.ibb.co.com/Cpccb0Rz/image-19.png",
    "https://i.ibb.co.com/b50QHRQ7/image-21.png",
    "https://i.ibb.co.com/DPpbdmP7/image-20.png",
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-10 pb-30 lg:pb-50 xl:pb-90 gap-6">
      {/* Rating Summary */}
      <div className="lg:col-span-3 space-y-6 xl:pt-5">
            <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
                <Star fill="#FACC15" key={i} className="text-[#FACC15]" />
            ))}
            <span className="font-semibold text-primary-color">4.7 Out Of 5</span>
            </div>
            <p className="text-sm text-gray-500 lg:pb-3">43 Global Rating</p>
        <div className="border-2 p-3 xl:p-5 rounded-2xl">
            <div className="space-y-3">
            {ratings.map((percent, i) => (
                <div key={i} className="text-sm flex items-center gap-4">
                    <span className="text-primary-color xl:font-semibold lg:w-[60px] xl:w-[50px] w-[50px]">{5 - i} star</span>
                    <div className="w-full bg-gray-200 h-4 xl:h-7 rounded-full mt-1">
                        <div
                        className={`h-4 xl:h-7 rounded-full ${percent > 40 ? "bg-[#CAA204]": "bg-yellow-400"} `}
                        style={{ width: `${percent}%` }}
                        ></div>
                    </div>
                </div>
            ))}
            </div>

            <div className="mt-6 px-4 pt-4 border-t">
            <p className="font-medium text-primary-color mb-2">
                Reviews This Product
            </p>
            <p className="pb-2 md:pb-4 xl:pb-6 text-[12px]">
                Share Your Thoughts with others customer
            </p>
            <button className="w-full border border-[#32BADE] text-black py-2 rounded-4xl hover:bg-sky-50 transition">
                Write a review
            </button>
            </div>
        </div>
      </div>

      {/* Review + Carousel */}
      <div className={`lg:col-span-7 space-y-10 ${poppins.className}`}>
        {/* Swiper */}
        <div className="relative">
        <Swiper
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        modules={[Navigation]}
        className="swiper-container"
      >
        {[...Array(5)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center gap-4 p-4">
              {reviewImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[70px] w-[70px] lg: xl:w-[32] md:w-24 md:h-24 xl:h-32"
                >
                  <Image
                    src={img}
                    alt={`product ${index}`}
                    fill
                    className="object-cover rounded h-[70px] w-[70px]"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation buttons with Lucide Icons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[11px] z-10">
        <button className="swiper-button-prev-custom border bg-white bg-opacity-50 backdrop-blur-md rounded-sm p-2 cursor-pointer text-gray-800 hover:bg-opacity-70 transition-all duration-300">
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[11px] z-10">
        <button className="swiper-button-next-custom border bg-white bg-opacity-50 backdrop-blur-md rounded-sm cursor-pointer p-2 text-gray-800 hover:bg-opacity-70 transition-all duration-300">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
        </div>

        {/* Reviews */}
        {reviews.map((review) => (
          <div
            key={review?.id}
            className="p-4 border rounded-lg shadow-sm space-y-3"
          >
            <div className="flex items-center gap-3 lg:gap-6">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src={review?.image}
                  alt="User"
                  fill
                  className="object-cover w-[70px] h-[70px]"
                />
              </div>
              <div>
                <p className={`font-semibold  ${poppins.className}`}>{review?.reviewer_name}</p>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star fill="#FACC15" key={i} className="text-[#FACC15]" />
                  ))}
                </div>
              </div>
            </div>
            <p className={`text-sm text-primary-color xl:pb-5 xl:font-medium lg:px-10 xl:px-16 ${poppins.className}`}>
              {review?.comment}
            </p>
            <div className="flex gap-3 xl:pb-5 lg:px-10 xl:px-20 text-sm text-gray-500">
              <span>{review?.review_date}</span>
              <span className="text-sky-500 cursor-pointer">Helpful</span>
              <span className="text-red-500 cursor-pointer">Report</span>
            </div>
            <div className="flex gap-2 lg:px-10 xl:px-16">
              {reviewImages.map((img, idx) => (
                <div key={idx} className="relative w-20 h-20">
                  <Image
                    src={img}
                    alt="review"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
