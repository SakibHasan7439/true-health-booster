"use client"
import Button from '@/app/Shared/Button/Button';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { poppins } from '@/app/layout';

const Hero = ({ data }) => {
    return (
        <div>
            <Swiper
                pagination={{

                    dynamicBullets: false,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                className="mySwiper">
                {
                    data?.sliders && (
                        data?.sliders?.map((item) => (
                            <SwiperSlide>
                                <div className={`bg-[#F6F6F6] md:pb-20 lg:pb-28 xl:pb-32 py-2 md:pt-4 lg:pt-4 md:px-0 ${poppins.className}`}>
                                    <div className="max-w-7xl mx-auto px-2 flex justify-between flex-col-reverse md:flex-row">
                                        <div>
                                            <h1 className={`md:text-2xl text-xl pt-4 md:pt-4 xl:pt-8 lg:text-[35px] font-medium xl:text-[55px] pb-4 lg:pb-8 text-${item?.title_color || 'primary-color'} xl:leading-16`}>{item?.title}</h1>
                                            <p className='text-secondary-color lg:text-[18px] pb-4 md:pb-8 lg:pb-10 max-w-[760px] line-clamp-3'>
                                                {item?.description}
                                            </p>
                                            <Button
                                                onClick={() => {
                                                    window.open(item?.url)
                                                }}
                                                text={"Shop now"} className={"px-10 mb-10 md:mb-0 md:px-18"} />
                                        </div>
                                        <Image
                                            src={item?.image || "/images/hero.png"}
                                            alt='hero image'
                                            width={590}
                                            height={460}
                                            className='md:w-[360px] w-[220px] h-[180px] md:h-[300px] lg:h-[400px] lg:w-[500px] mx-auto' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    )
                }

            </Swiper>
        </div>
    );
};

export default Hero;