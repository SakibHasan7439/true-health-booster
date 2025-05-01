import { Heart, ShoppingCart, Eye, Star, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SupplementCard = ({ product }) => {
    return (
        <div className="rounded-xl group relative w-full mb-10 lg:mb-0">
            {/* Image container */}
            <div className="relative overflow-hidden rounded-xl">
                <Image 
                    width={300}
                    height={300}
                    src={product.image} 
                    className='w-full mb-4 rounded-xl'
                    alt={product.name}
                />
                
                {/* Hover Icons */}
                <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#32BADE] hover:text-white transition">
                        <Heart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#32BADE] hover:text-white transition">
                        <ShoppingCart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#32BADE] hover:text-white transition">
                        <ShoppingBag size={18} />
                    </button>
                </div>
            </div>

            {/* Product details */}
            <div className="flex text-sm md:text-lg lg:text-[12px] xl:text-[16px] gap-2 mt-1">
                <h4 className="leading-7 w-[80%] xl:w-[90%] lg:w-[80%]">{product.name}</h4>
                <div className='flex items-center mb-6 gap-2'>
                    <Star color='#FACC15' fill='#FACC15' size={'15px'} /> 
                    <p className='text-yellow-500 text-[18px] lg:text-[15px]'>{product.rating}</p>
                </div>
            </div>
            <div className="mt-2">
              <span className="text-[#32BADE] font-bold">${product.price.toFixed(2)}</span>
              <span className="line-through text-gray-400 ml-2">${product.originalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default SupplementCard;
