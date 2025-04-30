import { poppins } from '@/app/layout';
import React from 'react';

const Button = ({text, className, onclick}) => {
    return (
        <button onClick={onclick} className={`${poppins.className} bg-[#32BADE] cursor-pointer hover:bg-[#29aacd] h-[52px] px-8 py-3 rounded-2xl text-white text-[16px] ${className}`}>
            {text}
        </button>
    );
};

export default Button;