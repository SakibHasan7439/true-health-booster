"use client"
import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import useFetch from '@/hooks/useFetch';
import PolicyDetails from '../Components/policy-page/policy-rules-details/PolicyDetails';
import JoinUs from '../Components/Landing/join-us/JoinUs';

const ReturnPolicy = () => {
    const {data, error, loading} = useFetch("/dummy-json-data/returnPolicy.json");
    return (
        <div>
            <PageBreadcrumb className={"mb-8 lg:mb-10 xl:mb-14"} title={"Return policy"} route={"return-policy"}/>
            <div className="max-w-7xl mx-auto mb-14 md:mb-20 xl:mb-[186px]">
                {
                    data.map((rules, index) => <PolicyDetails
                     key={index}
                     rules={rules} 
                    />)
                }
            </div>
            <JoinUs />
        </div>
    );
};

export default ReturnPolicy;