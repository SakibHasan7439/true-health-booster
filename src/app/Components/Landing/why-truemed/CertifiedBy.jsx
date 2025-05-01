import Image from 'next/image';
import React from 'react';

const CertifiedBy = ({image, company, className}) => {
    return (
        <div>
            <Image 
                width={140}
                height={166}
                src={image}
                className={`object-contain mb-3 ${className}`}
                alt='truemed certified company logo'
            />
            <p className="font-semibold text-secondary-color mb-6 pl-2 text-sm md:text-[18px]">{company}</p>
        </div>
    );
};

export default CertifiedBy;