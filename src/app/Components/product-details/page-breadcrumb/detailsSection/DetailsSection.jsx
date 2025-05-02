"use client"
import ImageSlider from "./ImageSlider";
import React, { useEffect, useState } from 'react';
import ProductDescription from "./ProductDescription";

const DetailsSection = () => {
    const productData = {
        images: [
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png'
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

    console.log(data);
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <ImageSlider data={productData}/>
            {/* for small device only*/}
            <ProductDescription 
                name={data?.product?.name}
                description={data?.product?.description}
                rating={data?.product?.rating}
                manufacturer={data?.product?.manufacturer}
                manufacturer_description={data?.product?.manufacturer_description}
                sales_volume={data?.product?.sales_volume}
            />
        </div>
    );
};

export default DetailsSection;