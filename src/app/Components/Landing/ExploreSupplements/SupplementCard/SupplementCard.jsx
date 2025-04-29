import Image from 'next/image';
import React from 'react';

const SupplementCard = ({product}) => {
    return (
        <div className="rounded-xl p-2 shadow hover:shadow-md transition duration-300">
            <Image 
                width={300}
                height={300}
                src={product.image} 
                className='w-full lg:w-[300px]'
                alt={product.name}/>
            {/* <img  className="w-full h-48 object-cover rounded-md mb-4" /> */}
            <div className="flex items-center gap-2 text-sm mt-1">
                <h4 className="text-md font-semibold w-[80%] ">{product.name}</h4>
                <span className='text-yellow-500'>⭐ {product.rating}</span>
            </div>
            <div className="mt-2">
              <span className="text-[#32BADE] font-bold">${product.price.toFixed(2)}</span>
              <span className="line-through text-gray-400 ml-2">${product.originalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default SupplementCard;