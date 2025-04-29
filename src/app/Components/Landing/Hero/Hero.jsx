import Button from '@/app/Shared/Button/Button';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#F6F6F6] mb-8 md:mb-16 py-2 md:py-16 px-2 md:px-0'>
            <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row">
                <div>
                <h1 className='md:text-3xl text-2xl pt-4 md:pt-12 lg:text-[42px] xl:text-[58px] pb-8'>Boost Your Health Naturally with Our Supplement</h1>
                <p className='text-[#5d5d5d] pb-8 max-w-[584px]'>
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
    );
};

export default Hero;