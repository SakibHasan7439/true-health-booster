import React from 'react';
import Achievement from './Achievement';

const OurAchievements = () => {
    return (
        <div className='max-w-7xl mt-10 md:mt-16 p-3 pb-8 pd:mb-16 lg:pb-20 xl:pb-30 mx-auto grid grid-cols-3'>
            <Achievement 
                totalAmount={"+56,881"}
                achievement={"Our Customer"}/>
            <Achievement 
                totalAmount={"+7,00,571"}
                achievement={"Our Visitor"}/>
            <Achievement 
                totalAmount={"5,048"}
                achievement={"Our Trusted Client"}/>
        </div>
    );
};

export default OurAchievements;