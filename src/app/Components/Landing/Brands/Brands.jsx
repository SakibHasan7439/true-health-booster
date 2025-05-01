import Image from 'next/image';
import React from 'react';

const Brands = () => {
    return (
        <div className='grid max-w-7xl text-center place-items-center mx-auto justify-center grid-cols-12 lg:flex items-center lg:justify-between'>
            <Image 
                height={50}
                width={150}
                alt='brand logo'
                className="col-span-6 w-[110px] md:w-[135px] md:col-span-4 mb-6 md:mb-12"
                src={"/images/brand1.png"}/>
            <Image 
                height={50}
                width={200}
                alt='brand logo'
                className="col-span-6 w-[120px] md:w-[200px] md:col-span-4 mb-6 md:mb-12"
                src={"/images/brand2.png"}/>
            <Image 
                height={50}
                width={200}
                alt='brand logo'
                className="col-span-6 w-[120px] md:w-[135px] md:col-span-4 mb-6 md:mb-12"
                src={"/images/brand3.png"}/>
            <Image 
                height={48}
                width={120}
                alt='brand logo'
                className="col-span-6 w-[100px] md:w-[120px] md:col-span-4 pb-6 lg:pb-4 mb-6 md:mb-12"
                src={"/images/brand4.png"}/>
            <Image 
                height={48}
                width={165}
                alt='brand logo'
                className="col-span-6 w-[110px] md:w-[165px] md:col-span-4 mb-6 md:mb-12"
                src={"/images/brand5.png"}/>
        </div>
    );
};

export default Brands;