import React from 'react';

const Button = ({text, className, onclick}) => {
    return (
        <button onClick={onclick} className={`bg-[#32BADE] cursor-pointer hover:bg-[#29aacd] h-[52px] font-semibold w-full px-6 py-3 max-w-[240px] rounded-2xl text-white text-sm ${className}`}>
            {text}
        </button>
    );
};

export default Button;