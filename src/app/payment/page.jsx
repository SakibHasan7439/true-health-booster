import CheckoutDetails from "../Components/checkout-page-components/checkout-form/CheckoutDetails";
import JoinUs from "../Components/Landing/join-us/JoinUs";
import PaymentForm from "../Components/payment-components/payment-form/PaymentForm";
import PageBreadcrumb from "../Components/product-details/page-breadcrumb/PageBreadcrumb";

const Payment = () => {
    return (
        <div>
            <PageBreadcrumb title={"Payment"} route={"payment"}/>
            <div className="max-w-7xl section-bottom-spacing mx-auto grid grid-cols-1 md:grid-cols-10 gap-4 xl:gap-6">
                {/* payment form field */}
                <div className="md:col-span-5 lg:col-span-6">
                    <PaymentForm />
                </div>

                {/* payment */}
                <div className="md:col-span-5 lg:col-span-4">
                    <CheckoutDetails headingText={100} bottomSpacing={"xl:!pb-[50px]"} textColor={"text-[#32BADE]"} title={"Cart Details"}/>
                </div>
            </div>
            <JoinUs />
        </div>
    );
};

export default Payment;