"use client";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import PageSectionSubtitle from "../page-section-subtitle/PageSectionSubtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FromBrandCard from "./FromBrandCard";

const slides = [
  {
    id: 1,
    title: "ORGANIC & PURE COCONUT SHELL CHARCOAL",
    text: "Our activated charcoal capsules are 100% organic, sourced from the purest coconut shellsOur activated charcoal capsules are 100% organic, sourced from the purest coconut shells...",
    img: "https://i.ibb.co.com/pBTsFsPZ/banner4.webp"
  },
  {
    id: 2,
    title: "EFFECTIVE DIGESTIVE HEALTH & STOMACH COMFORT",
    text: "Experience relief from bloating, indigestion, and occasional stomach discomfort Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/rP7fnM3/2003-Activated-Charcoal-732x549-thumbnail-732x549.jpg"
  },
  {
    id: 3,
    title: "IDEAL FOR LIVING ENTHUSIASTS",
    text: "Whether you're detoxing, or needing occasional bloating support Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/jZs9wKSg/pngtree-outdoor-portrait-of-beautiful-happy-mixed-race-african-american-girl-teenager-photo-image-30.jpg"
  },
  {
    id: 4,
    title: "ORGANIC & PURE COCONUT SHELL CHARCOAL",
    text: "Our activated charcoal capsules are 100% organic, sourced from the purest coconut shells Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/pBTsFsPZ/banner4.webp"
  },
  {
    id: 5,
    title: "EFFECTIVE DIGESTIVE HEALTH & STOMACH COMFORT",
    text: "Experience relief from bloating, indigestion, and occasional stomach discomfort Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/rP7fnM3/2003-Activated-Charcoal-732x549-thumbnail-732x549.jpg"
  },
  {
    id: 6,
    title: "IDEAL FOR LIVING ENTHUSIASTS",
    text: "Whether you're detoxing, or needing occasional bloating support Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/jZs9wKSg/pngtree-outdoor-portrait-of-beautiful-happy-mixed-race-african-american-girl-teenager-photo-image-30.jpg"
  },
  {
    id: 7,
    title: "ORGANIC & PURE COCONUT SHELL CHARCOAL",
    text: "Our activated charcoal capsules are 100% organic, sourced from the purest coconut shells Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/pBTsFsPZ/banner4.webp"
  },
  {
    id: 8,
    title: "EFFECTIVE DIGESTIVE HEALTH & STOMACH COMFORT",
    text: "Experience relief from bloating, indigestion, and occasional stomach discomfort Experience relief from bloating, indigestion, and occasional stomach discomfort...",
    img: "https://i.ibb.co.com/rP7fnM3/2003-Activated-Charcoal-732x549-thumbnail-732x549.jpg"
  },
];

const FromTheBrand = () => {
  
  return (
    <>
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
        <div className=" bg-cover rounded-xl lg:rounded-3xl bg-center pt-19 md:pt-30 xl:pt-43 h-[240px] md:h-[400px] xl:h-[600px] bg-no-repeat" style={{ backgroundImage: "url('/images/banner4.webp')" }}>
          <Swiper
            slidesPerView={1}
            navigation={{
              nextEl: ".from-brand-next",
              prevEl: ".from-brand-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              330: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
  
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {
              slides.map((info) => <SwiperSlide key={info?.id}>
                <FromBrandCard info={info}/>
              </SwiperSlide>)
            }
          </Swiper>

          {/* Custom navigation buttons */}
          <button className="from-brand-prev cursor-pointer custom-nav-btn p-[6px] md:p-[10px] xl:p-[14px]"><ChevronLeft size={14}/></button>
          <button className="from-brand-next cursor-pointer custom-nav-btn p-[6px] md:p-[10px] xl:p-[14px]"><ChevronRight size={14} /></button>

          <style>
          {`
            .custom-nav-btn {
              background-color: #73D6ED;
              
              border-radius: 100%;
              color: black;
              position: absolute;
              top: 54%;
              transform: translateY(-50%);
              z-index: 10;
            }

            .from-brand-prev {
              left: 20px;
            }

            .from-brand-next {
              right: 20px;
            }
          `}
          </style>
        </div>
      </div>
    
      {/* test case */}
      {/* <div className="relative py-20" >
      <div className="max-w-6xl mx-auto px-4 flex items-center space-x-6">
        <img src="/images/logo.png" alt="TrueMed Logo" className="w-36 h-36 rounded-full border-4 border-white" />
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{
            768: {
              slidesPerView: 2.5
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white shadow-lg max-w-md h-full">
                <img src={slide.img} alt={slide.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div> */}
    </>
  );
};

export default FromTheBrand;
