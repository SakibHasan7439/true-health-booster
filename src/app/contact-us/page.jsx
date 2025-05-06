import React from 'react';
import PageBreadcrumb from '../Components/product-details/page-breadcrumb/PageBreadcrumb';
import ContactInfo from '../Components/contact-page/contact-info/ContactInfo';
import ContactFormSection from '../Components/contact-page/contact-form-section/ContactFormSection';
import WhyTruemed from '../Components/Landing/why-truemed/WhyTruemed';
import JoinUs from '../Components/Landing/join-us/JoinUs';

const ContactUs = () => {
    return (
        <div>
            <PageBreadcrumb 
                title={"Contact us"} 
                route={"contact-us"} 
                className={"!pb-10 lg:!pb-14 xl:!pb-[105px]"}
            />
            <div className='max-w-7xl mx-auto'>
                <ContactInfo />
                <ContactFormSection />
                <WhyTruemed />
                <JoinUs />
            </div>
        </div>
    );
};

export default ContactUs;