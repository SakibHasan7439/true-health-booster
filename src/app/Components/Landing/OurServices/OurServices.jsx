import React from 'react';
import OurService from './OurService';
import Button from '@/app/Shared/Button/Button';

const OurServices = () => {
    return (
        <div className='max-w-7xl mx-auto mb-8 md:mb-16 lg:mb-30'>
            <div className='grid grid-cols-12 lg:pl-5 lg:flex lg:justify-between lg:items-center pb-4 md:pb-8'>
                <OurService 
                    image={'/images/service4.png'}
                    serviceName={"Womans Health"}
                />
                <OurService 
                    image={'/images/service1.png'}
                    serviceName={"Supplements for old age"}
                />
                <OurService 
                    image={'/images/service3.png'}
                    serviceName={"Libido Support"}
                />
                <OurService 
                    image={'/images/service5.png'}
                    serviceName={"Mans Health"}
                />
                <OurService 
                    image={'/images/service2.png'}
                    serviceName={"Supplements for all age"}
                />
            </div>
            <div className='flex justify-between'>
            <Button className={"mx-auto"} text={"Discover Your Perfect Match"}/>
            </div>
        </div>
    );
};

export default OurServices;