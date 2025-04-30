"use client"
import Button from '@/app/Shared/Button/Button';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { poppins } from '@/app/layout';

const Hero = () => {
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
                <SwiperSlide>
                    <div className={`bg-[#F6F6F6] lg:pb-28 xl:pb-32 py-2 md:py-8 md:px-0 ${poppins.className}`}>
                        <div className="max-w-7xl mx-auto px-2 flex justify-between flex-col md:flex-row">
                            <div>
                            <h1 className='md:text-2xl text-2xl pt-4 md:pt-12 lg:text-[42px] font-medium xl:text-[55px] pb-8 text-primary-color lg:leading-16'>Boost Your Health Naturally with Our Supplement</h1>
                            <p className='text-secondary-color lg:text-[18px] pb-8 lg:pb-10 max-w-[760px]'>
                                Give your body the essential nutrients it deserves with our premium,all-natural supplements. Whether you're looking to boost your vitality, enhance performance, or maintain a healthy lifestyle, we've got you covered.
                            </p>
                            <Button text={"Shop now"} className={"px-18"} />
                            </div>
                            <Image 
                                src={"/images/hero.png"}
                                alt='hero image'
                                width={590}
                                height={460}
                                className='md:w-[360px] md:h-[400px] lg:w-[500px]'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`bg-[#F6F6F6] lg:pb-28 xl:pb-32 py-2 md:py-8 md:px-0 ${poppins.className}`}>
                        <div className="max-w-7xl mx-auto px-2 flex justify-between flex-col md:flex-row">
                            <div>
                            <h1 className='md:text-2xl text-2xl pt-4 md:pt-12 lg:text-[42px] font-medium xl:text-[55px] pb-8 text-primary-color lg:leading-16'>Boost Your Health Naturally with Our Supplement</h1>
                            <p className='text-secondary-color lg:text-[18px] pb-8 lg:pb-10 max-w-[760px]'>
                                Give your body the essential nutrients it deserves with our premium,all-natural supplements. Whether you're looking to boost your vitality, enhance performance, or maintain a healthy lifestyle, we've got you covered.
                            </p>
                            <Button text={"Shop now"} className={"px-18"} />
                            </div>
                            <Image 
                                src={"/images/hero.png"}
                                alt='hero image'
                                width={590}
                                height={460}
                                className='md:w-[360px] md:h-[400px] lg:w-[500px]'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`bg-[#F6F6F6] py-2 xl:pb-32 md:py-8 lg:pb-28 md:px-0 ${poppins.className}`}>
                        <div className="max-w-7xl mx-auto px-2 flex justify-between flex-col md:flex-row">
                            <div>
                            <h1 className='md:text-2xl text-2xl pt-4 md:pt-12 lg:text-[42px] font-medium xl:text-[55px] pb-8 text-primary-color lg:leading-16'>Boost Your Health Naturally with Our Supplement</h1>
                            <p className='text-secondary-color lg:text-[18px] pb-8 lg:pb-10 max-w-[760px]'>
                                Give your body the essential nutrients it deserves with our premium,all-natural supplements. Whether you're looking to boost your vitality, enhance performance, or maintain a healthy lifestyle, we've got you covered.
                            </p>
                            <Button text={"Shop now"} className={"px-18"} />
                            </div>
                            <Image 
                                src={"/images/hero.png"}
                                alt='hero image'
                                width={590}
                                height={460}
                                className='md:w-[360px] md:h-[400px] lg:w-[500px]'
                                />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;