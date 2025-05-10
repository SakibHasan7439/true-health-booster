import { poppins } from '@/app/layout';
import React from 'react';

const Button = ({text, className, onClick}) => {
    return (
        <button onClick={onClick} className={`${poppins.className} bg-[#32BADE] cursor-pointer hover:bg-[#29aacd] xl:h-[52px] px-8 py-3 rounded-2xl text-white text-[12px] lg:text-[16px] ${className}`}>
            {text}
        </button>
    );
};

export default Button;