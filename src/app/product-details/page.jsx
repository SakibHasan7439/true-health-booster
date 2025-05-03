import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import DetailsSection from '../Components/product-details/page-breadcrumb/detailsSection/DetailsSection';
import { poppins } from '../layout';
import ExploreSupplements from '../Components/Landing/ExploreSupplements/ExploreSupplements';
import FromTheBrand from '../Components/product-details/from-the-brand/FromTheBrand';
import ArticleSection from '../Components/product-details/article-section/ArticleSection';
import ProductBanner from '../Components/product-details/product-banner/ProductBanner';
import ItemsInfo from '../Components/product-details/items-info/ItemsInfo';
import PreferredProducts from '../Components/product-details/preferred-products/PreferedProducts';
import OtherItemDetails from '../Components/product-details/other-item-details/OtherItemDetails';
import IntroduceTruemed from '../Components/Landing/introduce-truemed/IntroduceTruemed';
import ItemDescription from '../Components/product-details/item-description/ItemDescription';
import LastCardSection from '../Components/product-details/last-card-section/LastCardSection';
import ProductReview from '../Components/product-details/product-review/ProductReview';
import JoinUs from '../Components/Landing/join-us/JoinUs';

const ProductDetails = () => {
    return (
        <div className={poppins.className}>
            <PageBreadcrumb/>
            <DetailsSection />
            <ExploreSupplements />
            <FromTheBrand />
            <ArticleSection />
            <ProductBanner />
            <ItemsInfo />
            <PreferredProducts />
            <OtherItemDetails />
            <LastCardSection />
            <IntroduceTruemed 
                buttonContainer={"hidden"}
                sectionContainer={"!bg-white !pt-0 lg:!mb-0"} 
                className={"lg:!pb-4 xl:!pb-10"}
            />
            <div className='bg-[#F8F8F8] py-4 md:py-6 xl:py-10 mb-10 lg:mb-15 xl:mb-40'>
                <ItemDescription 
                    className={"max-w-7xl text-center mx-auto"}
                    titleClass={"!block"}
                    title={"About This Item"}
                />
            </div>
            <ProductReview />
            <JoinUs />
        </div>
    );
};

export default ProductDetails;