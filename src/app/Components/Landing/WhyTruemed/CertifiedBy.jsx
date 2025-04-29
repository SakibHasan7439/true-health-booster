import Image from 'next/image';
import React from 'react';

const CertifiedBy = ({image, company}) => {
    return (
        <div>
            <Image 
                width={150}
                height={180}
                src={image}
                className='h-[180px] object-contain mb-6'
                alt='truemed certified company logo'
            />
            <p className="font-semibold pl-6 text-sm">{company}</p>
        </div>
    );
};

export default CertifiedBy;