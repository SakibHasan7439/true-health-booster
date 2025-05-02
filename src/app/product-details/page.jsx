import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import DetailsSection from '../Components/product-details/page-breadcrumb/detailsSection/DetailsSection';
import { poppins } from '../layout';
import ExploreSupplements from '../Components/Landing/ExploreSupplements/ExploreSupplements';
import FromTheBrand from '../Components/product-details/from-the-brand/FromTheBrand';
import ArticleSection from '../Components/product-details/article-section/ArticleSection';
import ProductBanner from '../Components/product-details/product-banner/ProductBanner';

const ProductDetails = () => {
    return (
        <div className={poppins.className}>
            <PageBreadcrumb/>
            <DetailsSection />
            <ExploreSupplements />
            <FromTheBrand />
            <ArticleSection />
            <ProductBanner />
        </div>
    );
};

export default ProductDetails;