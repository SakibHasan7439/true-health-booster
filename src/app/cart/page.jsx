import React from 'react';
import CartTable from '../Components/cart-page/cart-table/CartTable';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import CheckoutField from '../Components/cart-page/checkout-field/CheckoutField';
import JoinUs from '../Components/Landing/join-us/JoinUs';

const Cart = () => {
    return (
        <div className='max-w-7xl mx-auto px-2 xl:px-0'>
            <PageBreadcrumb title={"Cart"} route={"cart"}/>
            <div className='grid grid-cols-1 lg:grid-cols-10 gap-6 mb-10 lg:mb-15 xl:mb-30'>
                <div className='lg:col-span-7'>
                <CartTable />
                </div>
                <div className="lg:col-span-3">
                <CheckoutField />
                </div>
            </div>
            <JoinUs />
        </div>
    );
};

export default Cart;