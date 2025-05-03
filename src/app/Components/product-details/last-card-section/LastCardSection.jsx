import React from 'react';
import ProductsCard from '../preferred-products/ProductsCard';

const LastCardSection = () => {
    const productInfo = [
        {
            id: 1,
            image: "https://i.ibb.co.com/Y65F13G/image-14.png",
            title: "About This Item",
            description: "ach serving delivers 1200 mg of activated charcoal to support digestive health by "
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/jvx94q05/image-16.png",
            title: "About This Item",
            description: "ach serving delivers 1200 mg of activated charcoal to support digestive health by "
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/Jwzvh1ST/image-15.png",
            title: "About This Item",
            description: "ach serving delivers 1200 mg of activated charcoal to support digestive health by "
        },
    ]
    return (
        <div className='max-w-7xl md:pb-5 px-2 xl:px-0 lg:pb-15 xl:pb-30 mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 xl:gap-6'>
            {
                productInfo.map((product)=> <ProductsCard 
                    key={product?.id} 
                    product={product}
                    className={"xl:w-[424px] xl:h-[424px]"}
                    className2={"xl:!text-lg"}
                />)
            }
        </div>
    );
};

export default LastCardSection;