import Button from '@/app/Shared/Button/Button';
import Image from 'next/image';
import React from 'react';

const ItemsCard = ({imageUrl, title, description, descriptionTwo, reverse}) => {
    return (
        <div className={`bg-[#f7f7f7] p-6 md:p-12 rounded-3xl mb-10 lg:mb-15 xl:mb-30`}>
            <div className={`flex flex-col max-w-7xl mx-auto md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''} gap-8`}>
                <Image
                    width={648}
                    height={573}
                    src={imageUrl} 
                    alt={title} 
                    className="h-[220px] md:w-[312px] md:h-[300px] xl:w-[648px] xl:h-full object-cover rounded-2xl" />
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e3d2f] mb-4">{title}</h2>
                    <p className="text-[#333] text-[12px] lg:text-sm xl:text-[20px] leading-relaxed pb-5 lg:pb-4">{description}</p>
                    <p className="text-[#333] hidden lg:block text-[12px] lg:text-sm xl:text-[20px] leading-relaxed pb-5 lg:pb-7 xl:pb-10">{descriptionTwo}</p>
                    <Button text={"Read More"}/>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;