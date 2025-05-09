import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import CheckoutForm from '../Components/checkout-page-components/checkout-form/CheckoutForm';
import CheckoutDetails from '../Components/checkout-page-components/checkout-form/CheckoutDetails';
import JoinUs from '../Components/Landing/join-us/JoinUs';

const Checkout = () => {
    return (
        <div>
            <PageBreadcrumb title={"Check Out"} route={"checkout"}/>
            <div className='max-w-7xl mx-auto px-2 xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-10 gap-2 lg:gap-6 mb-10 lg:mb-15 xl:mb-30'>
                    <div className="md:col-span-6 mb-6 md:mb-0">
                        <CheckoutForm />
                    </div>
                    <div className="md:col-span-4">
                        <CheckoutDetails title={"Checkout"}/>
                    </div>
                </div>
                <JoinUs />
            </div>
        </div>
    );
};

export default Checkout;