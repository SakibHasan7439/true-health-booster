'use client'

import { useState } from "react";
import SupplementCard from "../SupplementCard/SupplementCard";

const productsData = {
    trending: [
        { id: 1, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 165, originalPrice: 220, rating: 4.5, image: 'https://i.ibb.co.com/kVrD1VX3/image-1.png' },
        { id: 2, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 165, originalPrice: 220, rating: 4.5, image: 'https://i.ibb.co.com/Z6gFKHMT/image-2.png' },

        { id: 3, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 165, originalPrice: 220, rating: 4.5, image: 'https://i.ibb.co.com/DDDyrFyH/image.png' },

        { id: 4, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 165, originalPrice: 220, rating: 4.5, image: 'https://i.ibb.co.com/kVrD1VX3/image-1.png' },
      ],
      bestSelling: [
        { id: 5, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 175, originalPrice: 230, rating: 4.7, image: 'https://i.ibb.co.com/kVrD1VX3/image-1.png' },
        { id: 6, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 150, originalPrice: 210, rating: 4.6, image: 'https://i.ibb.co.com/DDDyrFyH/image.png' },
      ],
      newArrival: [
        { id: 7, name: 'Truemed Fenugreek Capsules 610mg for Diabetes', price: 190, originalPrice: 240, rating: 4.8, image: 'https://i.ibb.co.com/DDDyrFyH/image.png' },
        { id: 8, name: 'Truemed Vitamin Complex', price: 185, originalPrice: 225, rating: 4.4, image: 'https://i.ibb.co.com/kVrD1VX3/image-1.png' },
      ],
    };
    
    const tabs = [
      { key: 'trending', label: 'Trending Product' },
      { key: 'bestSelling', label: 'Best Selling Product' },
      { key: 'newArrival', label: 'New Arrival' },
    ];
const SupplementsSection = () => {
    const [activeTab, setActiveTab] = useState('trending');
    const products = productsData[activeTab];
    return (
        <div className="px-2 pb-16 md:pb-30">
            <div className="flex justify-center flex-col md:flex-row pb-14 items-center gap-4">
                {
                    tabs.map((tab) =>(
                        <button key={tab.key}
                        onClick={()=>setActiveTab(tab.key)}
                        className={`cursor-pointer h-[56px] w-full px-6 py-3 max-w-[205px] rounded-2xl text-black font-semibold text-sm ${activeTab === tab.key ? 'bg-[#32BADE] text-white' : 'text-gray-700'}`}
                        >
                        {tab.label}
                        </button>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    products.map((product) => <SupplementCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default SupplementsSection;