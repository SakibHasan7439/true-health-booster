import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchData = async() => {
            try {
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error("Network response was not ok!");
                }
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        };

        fetchData();
        
    }, [url])
    return {data, error, loading};
};

export default useFetch;