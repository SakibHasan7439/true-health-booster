"use client"
import ImageSlider from "./ImageSlider";
import React, { useEffect, useState } from 'react';
import ProductDescription from "./ProductDescription";
import ProductInfo from "../../product-info/ProductInfo";
import { poppins } from "@/app/layout";

const DetailsSection = () => {
    const productData = {
        images: [
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/B2Jfsrjn/1706640826-screen-shot-2024-01-30-at-1-52-58-pm-65b94592c6b4f.jpg',
            'https://i.ibb.co.com/nsysRjGk/1702667428-screen-shot-2023-12-15-at-2-08-46-pm-657ca4545ab92.jpg',
            'https://i.ibb.co.com/HfyW569n/ACTIVATED-CHARCOAL1.webp',
            'https://i.ibb.co.com/VW3xsfcZ/71-Wa7kmkr-YL.jpg'
        ]
    }

    const [data, setData] = useState(null);
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetch('/dummy-json-data/product.json');
          const json = await res.json();
          setData(json);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
      getData();
    }, []);

    return (
        <div className={`max-w-7xl mx-auto ${poppins.className}`}>
            <div className=" px-2 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 lg:pb-0 xl:pb-30">
                <ImageSlider data={productData}/>
                {/* for small device only*/}
                <ProductDescription 
                    name={data?.product?.name}
                    description={data?.product?.description}
                    rating={data?.product?.rating}
                    manufacturer={data?.product?.manufacturer}
                    manufacturer_description={data?.product?.manufacturer_description}
                    sales_volume={data?.product?.sales_volume}
                    categories={data?.product?.categories}
                    stock_status={data?.product?.stock_status}
                    price={data?.product?.price}
                />
            </div>
            <ProductInfo 
                details={data?.product?.details}
            />
        </div>
    );
};

export default DetailsSection;