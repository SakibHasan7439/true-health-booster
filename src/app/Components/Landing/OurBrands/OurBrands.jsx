import React from 'react';
import BrandTitle from '../BrandTitle/BrandTitle';
import Brands from '../Brands/Brands';
import Image from 'next/image';

const OurBrands = () => {
    return (
        <div className='px-4 lg:px-0 mt-10 mb-8 lg:mb-16'>
            <div className='mb-8 lg:mb-8'>
                <BrandTitle title={"Our Other Brands"}/>
                <Brands />
            </div>
            <div className="container mx-auto mb-12">
            <Image 
                width={800}
                height={500}
                className='w-full'
                src={'/images/new_products.png'}
                alt='new Products banner'/>
            </div>
        </div>
    );
};

export default OurBrands;