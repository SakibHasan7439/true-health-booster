import Image from 'next/image';
import React from 'react';

const Brands = () => {
    return (
        <div className='grid max-w-7xl text-center place-items-center mx-auto justify-center grid-cols-12 lg:flex items-center lg:justify-between'>
            <Image 
                height={50}
                width={150}
                alt='brand logo'
                className="col-span-6 w-[110px] xl:w-[135px] md:col-span-4 mb-6 lg:mb-0"
                src={"/images/brand1.png"}/>
            <Image 
                height={50}
                width={200}
                alt='brand logo'
                className="col-span-6 w-[120px] xl:w-[200px] md:col-span-4 mb-6 lg:mb-0"
                src={"/images/brand2.png"}/>
            <Image 
                height={50}
                width={200}
                alt='brand logo'
                className="col-span-6 w-[120px] xl:w-[135px] md:col-span-4 mb-6 lg:mb-0"
                src={"/images/brand3.png"}/>
            <Image 
                height={48}
                width={120}
                alt='brand logo'
                className="col-span-6 w-[100px] xl:w-[120px] md:col-span-4 pb-6 lg:pb-4 mb-6 lg:mb-0"
                src={"/images/brand4.png"}/>
            <Image 
                height={48}
                width={165}
                alt='brand logo'
                className="col-span-6 w-[90px] md:w-[110px] xl:w-[165px] md:col-span-4 mb-6  lg:mb-0"
                src={"/images/brand5.png"}/>
        </div>
    );
};

export default Brands;