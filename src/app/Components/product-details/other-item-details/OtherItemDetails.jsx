"use client"
import { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";

const OtherItemDetails = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        const fetchItemsData = async() =>{
            const res = await fetch("/dummy-json-data/secondItems.json");
            const data = await res.json();
            setItems(data?.secondItems)
        };
        fetchItemsData();
    }, [])

    console.log(items);
    return (
        <div>
            {
                items.map((item) => <ItemsCard 
                key={item?.id}
                imageUrl={item?.image}
                title={item?.title}
                description={item?.description}
                descriptionTwo={item?.descriptionTwo}
                reverse={item?.id === 2 ? true : false}
            />)
            }
        </div>
    );
};

export default OtherItemDetails;