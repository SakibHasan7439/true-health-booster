import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Brands = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Marquee pauseOnHover speed={50}>
                <div className='flex items-center xl:gap-16 gap-8'>
                    <Image 
                        height={50}
                        width={150}
                        alt='brand logo'
                        className="col-span-6 w-[90px] md:w-[120px] xl:w-[135px] md:col-span-4 mb-6 lg:mb-0"
                        src={"/images/brand1.png"}/>
                    <Image 
                        height={50}
                        width={200}
                        alt='brand logo'
                        className="col-span-6 w-[90px] md:w-[120px] xl:w-[200px] md:col-span-4 mb-6 lg:mb-0"
                        src={"/images/brand2.png"}/>
                    <Image 
                        height={50}
                        width={200}
                        alt='brand logo'
                        className="col-span-6 w-[90px] md:w-[120px] xl:w-[135px] md:col-span-4 mb-6 lg:mb-0"
                        src={"/images/brand3.png"}/>
                    <Image 
                        height={48}
                        width={120}
                        alt='brand logo'
                        className="col-span-6 w-[90px] xl:w-[120px] md:col-span-4 pb-6 lg:pb-4 mb-6 lg:mb-0"
                        src={"/images/brand4.png"}/>
                    <Image 
                        height={48}
                        width={165}
                        alt='brand logo'
                        className="col-span-6 w-[80px] md:w-[110px] xl:w-[165px] md:col-span-4 mb-6  lg:mb-0"
                        src={"/images/brand5.png"}/>
                </div>
            </Marquee>
        </div>
    );
};

export default Brands;