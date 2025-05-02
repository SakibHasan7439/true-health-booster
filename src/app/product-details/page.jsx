import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import DetailsSection from '../Components/product-details/page-breadcrumb/detailsSection/DetailsSection';
import { poppins } from '../layout';

const ProductDetails = () => {
    return (
        <div className={poppins.className}>
            <PageBreadcrumb/>
            <DetailsSection />
        </div>
    );
};

export default ProductDetails;