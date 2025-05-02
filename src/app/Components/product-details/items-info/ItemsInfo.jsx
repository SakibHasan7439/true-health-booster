"use client"
import { useEffect, useState } from "react";
import ItemShowcasingCard from "../item-showcasing-card/ItemShowcasingCard";
import Image from "next/image";

const ItemsInfo = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        const fetchItem = async () =>{
            const res = await fetch("/dummy-json-data/itemInfo.json");
            const data = await res.json();
            setItems(data.items);
        };

        fetchItem();
    }, []);

    console.log(items);
    return (
        <div className="section-bottom-spacing">
            {
                items.map((item) =><ItemShowcasingCard 
                    key={item?.id}
                    id={item?.id}
                    imageUrl={item?.image}
                    title={item?.title}
                    description={item?.description}
                    reverse={item?.id === 2 ? true: false}
                />)
            }
            <div className="container mx-auto">
                <Image 
                    width={1200}
                    height={747}
                    src={"/images/banner (2).png"}
                    alt="Banner image"
                    className="h-[240px] w-full xl:h-full lg:h-[350px] object-cover"
                />
            </div>
        </div>
    );
};

export default ItemsInfo;