import React from 'react';
import Achievement from './Achievement';

const OurAchievements = () => {
    return (
        <div className='max-w-7xl p-3 mb-8 md:mb-16 mx-auto flex items-center flex-row  justify-between '>
            <Achievement 
                totalAmount={"+56, 881"}
                achievement={"Our Customer"}/>
            <Achievement 
                totalAmount={"+7, 00, 571"}
                achievement={"Our Visitors"}/>
            <Achievement 
                totalAmount={"5,048"}
                achievement={"Our Trusted Clients"}/>
        </div>
    );
};

export default OurAchievements;