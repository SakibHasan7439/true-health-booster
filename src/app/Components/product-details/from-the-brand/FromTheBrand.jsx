"use client"
import SectionTitle from "../../Landing/section-title/SectionTitle";
import PageSectionSubtitle from "../page-section-subtitle/PageSectionSubtitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";

const FromTheBrand = () => {
    return (
        <div className="section-bottom-spacing max-w-7xl mx-auto">
            <div className="pb-6 lg:pb-10 xl:pb-14">
                <SectionTitle className={"max-w-[1280px] lg:!pb-5 text-left"} title={"from the brand"}/>
                <PageSectionSubtitle subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}/>
            </div>
            <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper">
                    <style jsx global>
                        {`
                        .swiper-button-next,
                        .swiper-button-prev {
                        background-color: #73D6ED;
                        padding: 1.5rem;
                        border-radius: 100%; 
                        color: black;
                        }

                        .swiper-button-next::after,
                        .swiper-button-prev::after {
                        font-size: 12px;
                        }
                        `}
                    </style>
                <SwiperSlide>
                    <Image 
                        width={900}
                        height={600}
                        src={"/images/fromBrand1.png"}
                        className="w-full h-[300px] lg:h-[500px] xl:h-[600px]"
                        alt="slider image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        width={800}
                        height={600}
                        src={"/images/fromBrand1.png"}
                        className="w-full h-[300px] lg:h-[500px] xl:h-[600px]"
                        alt="slider image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        width={800}
                        height={600}
                        src={"/images/fromBrand1.png"}
                        className="w-full h-[300px] lg:h-[500px] xl:h-[600px]"
                        alt="slider image"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FromTheBrand;