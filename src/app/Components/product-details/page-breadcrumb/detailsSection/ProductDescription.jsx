"use client"
import Image from "next/image";
import ProductOrder from "../product-order/ProductOrder";
import { poppins } from "@/app/layout";
const ProductDescription = ({name, description, rating, manufacturer, manufacturer_description, sales_volume, categories, stock_status, price, discount}) => {
    return (
        <div className={`px-2 lg:px-0 ${poppins.className}`}>
            <div className="text-[14px] lg:text-lg pb-4 xl:pb-6 xl:text-2xl font-medium text-primary-color">
            <h3>{name}</h3>
            <h3>{description}</h3>
            </div>

            <div className="flex items-center mb-4 xl:pb-6 gap-2 text-[16px] text-secondary-color">
                <p className="text-[14px] lg:text-[16px]">{rating?.stars}</p>
                <Image
                    width={116}
                    height={16}
                    src={'/images/stars.png'}
                    className="w-[100px] lg:w-[116px] xl:w-[140px]"
                    alt="review stars image"
                />
                <p className="text-[12px] xl:text-[16px]">{rating?.count} rating</p>
                <p className="text-[#32BADE] hidden md:block border-l-2 border-l-[#32BADE] md:pl-6 pl-2 md:text-sm ml-2 lg:ml-5">Search this page</p>
            </div>

            <p className="text-[#32BADE] pb-4 md:hidden md:border-l-2 border-l-[#32BADE] md:pl-6 md:ml-5">Search this page</p>
            <p className="text-secondary-color tru cut-text pb-4 text-sm xl:text-[16px] xl:pb-8">At <span>{manufacturer}</span> {manufacturer_description}</p>
            <p className="capitalize pb-2 md:pb-4 xl:pb-6 border-b border-b-[#E8EAE8] text-[16px] font-semibold mb-4 xl:mb-8">
                <span className="text-[#32BADE]">{sales_volume}</span> to Post Month
            </p>
            <ProductOrder 
                categories={categories}
                stock_status={stock_status}
                price={price}/>
        </div>
    );
};

export default ProductDescription;