"use client"
import Button from '@/app/Shared/Button/Button';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { poppins } from '@/app/layout';

const Hero = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                <SwiperSlide>
                    <div className={`bg-[#F6F6F6] py-2 md:py-16 px-2 md:px-0 ${poppins.className}`}>
                        <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row">
                            <div>
                            <h1 className='md:text-3xl text-2xl pt-4 md:pt-12 lg:text-[42px] xl:text-[57px] pb-8 text-[#2B2B2B] md:leading-16'>Boost Your Health Naturally with Our Supplement</h1>
                            <p className='text-[#5d5d5d] pb-8 lg:pb-10 max-w-[584px]'>
                                Give your body the essential nutrients it deserves with our premium,all-natural supplements. Whether you're looking to boost your vitality, enhance performance, or maintain a healthy lifestyle, we've got you covered.
                            </p>
                            <Button text={"Shop now"} />
                            </div>
                            <Image 
                                src={"/images/hero.png"}
                                alt='hero image'
                                width={500}
                                height={500}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        width={700}
                        height={600}
                        src={"/images/slider2.avif"}
                        className='w-full h-[520px] object-cover'
                        alt='health booster'/>
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                    width={700}
                    height={600}
                    className='w-full h-[520px] object-cover'
                    src={"/images/slider3.jpg"}
                    alt='health booster'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;