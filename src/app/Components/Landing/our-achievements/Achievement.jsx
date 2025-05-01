import { poppins } from '@/app/layout';
import React from 'react';

const Achievement = ({totalAmount, achievement}) => {
    return (
        <div className={`mb-4 ${poppins.className}`}>
            <h2 className="font-bold text-center text-[#32BADE] text-xl md:text-2xl lg:text-3xl xl:text-5xl pb-4 lg:mb-4">
                {totalAmount}
            </h2>
            <p className='text-sm md:text-[18px] font-medium text-center'>{achievement}</p>
        </div>
    );
};

export default Achievement;