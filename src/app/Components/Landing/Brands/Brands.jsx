import Image from 'next/image';
import React from 'react';

const Brands = () => {
    return (
        <div className='grid max-w-7xl text-center place-items-center mx-auto justify-center grid-cols-12 lg:flex items-center lg:justify-between'>
            <Image 
                height={100}
                width={140}
                alt='brand logo'
                className="col-span-6 md:col-span-4 mb-12"
                src={"/images/brand1.png"}/>
            <Image 
                height={100}
                width={140}
                alt='brand logo'
                className="col-span-6 md:col-span-4 mb-12"
                src={"/images/brand2.png"}/>
            <Image 
                height={100}
                width={140}
                alt='brand logo'
                className="col-span-6 md:col-span-4 mb-12"
                src={"/images/brand3.png"}/>
            <Image 
                height={100}
                width={140}
                alt='brand logo'
                className="col-span-6 md:col-span-4 mb-12"
                src={"/images/brand4.png"}/>
            <Image 
                height={100}
                width={140}
                alt='brand logo'
                className="col-span-6 md:col-span-4 mb-12"
                src={"/images/brand5.png"}/>
        </div>
    );
};

export default Brands;