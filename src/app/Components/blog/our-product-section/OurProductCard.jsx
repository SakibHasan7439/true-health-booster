import { poppins } from "@/app/layout";
import Button from "@/app/Shared/Button/Button";
import { Heart, ShoppingCart, Star, StarHalf } from "lucide-react";
import Image from "next/image";

const OurProductCard = ({product}) => {
    return (
        <div className={`rounded-xl border group relative w-full mb-5 lg:mb-0 ${poppins.className}`}>
            {/* Image container */}
            <div className="relative overflow-hidden rounded-xl">
                <Image 
                    width={300}
                    height={300}
                    src={product?.image} 
                    className='w-full mb-4 rounded-xl'
                    alt={product?.title}
                />
                
                {/* Hover Icons */}
                <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#32BADE] hover:text-white transition">
                        <Heart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#32BADE] hover:text-white transition">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>

            {/* Product details */}
            <div className="p-2 xl:p-4">
                <h4 className="xl:leading-7 cut-text leading-5 pb-2 xl:pb-4 text-[13px] lg:text-[14px] xl:text-[18px] font-medium">{product?.title}</h4>
                <div className='flex items-center lg:mb-6 pb-2 xl:pb-4 gap-2 border-b'>
                    <div className="flex items-center gap-[2px] md:gap-1">
                        <Star  color='#FACC15' fill='#FACC15' size={'12px'} /> 
                        <Star color='#FACC15' fill='#FACC15' size={'12px'} /> 
                        <Star color='#FACC15' fill='#FACC15' size={'12px'} /> 
                        <Star color='#FACC15' fill='#FACC15' size={'12px'} /> 
                        <StarHalf color='#FACC15' fill='#FACC15' size={'12px'} /> 
                        <div className="border-r text-[9px] md:text-[12px] xl:text-[16px] pr-2 md:pr-4 xl:pr-6 mr-2 xl:mr-6">{product?.rating} 4.5</div>
                    </div>
                    <p className="text-[9px] md:text-[12px] xl:text-[16px] text-[#32BADE]">{product?.total_review} Reviews</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                <span className="text-[#32BADE] font-bold">${product.price.toFixed(2)}</span>
                <Button 
                    className={"!py-2 !px-3 md:!px-5 lg:px-8 xl:!px-10 md:!py-3 xl:!h-[40px] !rounded-lg lg:rounded-2xl !text-sm"}
                    text={"Buy Now"}  
                />
                </div>
            </div>
        </div>
    );
};

export default OurProductCard;