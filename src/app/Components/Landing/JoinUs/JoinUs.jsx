import Button from '@/app/Shared/Button/Button';
import { Input } from '@/components/ui/input';
import React from 'react';

const JoinUs = () => {
    return (
        <div className='mb-10 p-2 max-w-7xl mx-auto pb-6 border-b-2 border-b-[#E8EAE8] flex items-center justify-between flex-col md:flex-row'>
            <div className='mb-4 md:w-[50%] lg:w-[55%]'>
                <h4 className='capitalize pb-[10px] text-xl text-primary-color font-semibold'>join our newsletter</h4>
                <p className='text-[#A2A8AF] text-lg'>Get the latest news and updates</p>
            </div>
            <div className='flex flex-col md:flex-row  w-full items-center gap-2'>
                <Input type="email" className={"py-6 max-w-[678px]"} placeholder="Enter Email Address" />
                <Button text={"Subscribe"}/>
            </div>
        </div>
    );
};

export default JoinUs;