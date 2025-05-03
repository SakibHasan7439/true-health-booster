"use client"

import Button from "@/app/Shared/Button/Button";
import { CircleMinus, CirclePlus, Heart } from "lucide-react";
import { useState } from "react";

const ProductOrder = ({categories, stock_status, price}) => {
    const [totalAddedProduct, setTotalAddedProduct] = useState(1);
    const increment = () =>{
        setTotalAddedProduct(totalAddedProduct + 1);
    }

    const decrement = () =>{
        if(totalAddedProduct > 0){
            setTotalAddedProduct(totalAddedProduct - 1);
        }
    }

    return (
        <div className="pb-6 md:pb-0">
            <div className="lg:flex flex-col items-center pb-4 xl:pb-10 lg:flex-row justify-between">
                <p className="pb-2 lg:pb-0"><span className="font-semibold lg:text-sm text-[12px] xl:text-lg">Category: </span>
                    {
                        categories && categories.map((category, index) => <span key={index} className="text-sm xl:text-[16px] text-[#1699BE]">{category}, </span>)
                        
                    }
                </p>
                <p className="text-sm xl:text-[16px] text-[#3B82fc]"><span className="font-semibold text-sm xl:text-lg text-primary-color">Stock: </span>{stock_status}</p>
            </div>

            <div className="flex md:gap-6 xl:gap-0 justify-between items-center pb-4 md:pb-4 xl:pb-10">
                <div className="flex">
                    <p className="text-[#FA4444] flex flex-col text-[12px] lg:text-[16px]">{price?.discounted}
                    <span className="text-secondary-color">{price?.saved}</span>
                    </p>
                    <p className="text-xl lg:text-3xl text-[#32BADE] xl:text-5xl">{price?.original}</p>
                </div>
                <div className="flex items-center gap-2 font-medium">
                    <span className="text-[12px] md:text-[16px]">Quantity: </span>
                    <div className="w-[100px] h-[40px] lg:w-[140px] flex items-center justify-between p-2 lg:p-4 text-primary-color xl:h-[56px] border rounded-md border-[#afaaaa]">
                        <CircleMinus 
                            onClick={()=>decrement()}
                            size={24} 
                            className="cursor-pointer md:w-[20px] lg:w-[24px]"/>
                        <span>{totalAddedProduct}</span>
                        <CirclePlus  
                            onClick={()=>increment()}
                            size={24} 
                            className="cursor-pointer md:w-[20px] lg:w-[24px]"/>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 xl:gap-6">
                <button className={"bg-[#32BADE] text-white xl:px-20 lg:px-8 xl:py-3 px-3 py-2 rounded-lg lg:rounded-xl"}>Buy Now</button>
                <button className={"bg-transparent xl:px-20 lg:px-8 px-2 py-2 lg:py-2 rounded-lg lg:rounded-xl border border-[#32BADE] xl:py-3"}>Add To Cart</button>
                <button className="rounded-xl xl:rounded-2xl py-2 px-2 bg-transparent border border-[#32BADE] xl:py-3">
                    <Heart size={24} color="#32BADE"/>
                </button>
            </div>
        </div>
    );
};

export default ProductOrder;