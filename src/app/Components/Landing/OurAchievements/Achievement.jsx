import React from 'react';

const Achievement = ({totalAmount, achievement}) => {
    return (
        <div className='mb-4'>
            <h2 className="font-bold text-center text-[#32BADE] text-xl md:text-2xl lg:text-4xl pb-4">
                {totalAmount}
            </h2>
            <p className='text-sm font-semibold text-center'>{achievement}</p>
        </div>
    );
};

export default Achievement;