import Button from '@/app/Shared/Button/Button';
import { Input } from '@/components/ui/input';
import React from 'react';

const JoinUs = () => {
    return (
        <div className='mt-10 mb-8 md:mb-12 p-2 max-w-7xl mx-auto pb-6 border-b-2 border-b-[#E8EAE8] flex justify-between items-center flex-col md:flex-row'>
            <div className='md:w-1/3 mb-4'>
                <h4 className='capitalize pb-3 font-semibold'>join our newsletter</h4>
                <p className='text-[#A2A8AF]'>Get the latest news and updates</p>
            </div>
            <div className='flex flex-col md:flex-row  w-full items-center gap-2'>
                <Input type="email" className={"py-6"} placeholder="Enter Email Address" />
                <Button text={"Subscribe"}/>
            </div>
        </div>
    );
};

export default JoinUs;