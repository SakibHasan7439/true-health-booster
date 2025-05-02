"use client"
import Image from "next/image";
const ProductDescription = ({name, description, rating, manufacturer, manufacturer_description, sales_volume, categories, stock, price, discount}) => {
    console.log(rating);
    return (
        <div className="px-2 lg:px-0">
            <h3 className="text-lg lg:text-2xl font-medium text-primary-color">{name}</h3>
            <h3 className="text-lg lg:text-2xl font-medium text-primary-color pb-4 lg:pb-6">{description}</h3>

            <div className="flex items-center md:pb-6 gap-2 text-[16px] text-secondary-color">
                <p>{rating?.stars}</p>
                <Image
                    width={116}
                    height={16}
                    src={'/images/stars.png'}
                    alt="review stars image"
                />
                <p>{rating?.count} rating</p>
                <p className="text-[#32BADE] hidden md:block border-l-2 border-l-[#32BADE] md:pl-6 pl-2 ml-2 md:ml-5">Search this page</p>
            </div>
            
            <p className="text-[#32BADE] pb-4 md:hidden md:border-l-2 border-l-[#32BADE] md:pl-6 md:ml-5">Search this page</p>
            <p className="text-secondary-color pb-5 lg:pb-8">At <span>{manufacturer}</span> {manufacturer_description}</p>
            <p className="capitalize text-[16px] font-semibold"><span className="text-[#32BADE]">{sales_volume}</span> to Post Month</p>

        </div>
    );
};

export default ProductDescription;