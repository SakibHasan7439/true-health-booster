import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SupplementsSection from './SupplementsSection/SupplementsSection';

const ExploreSupplements = () => {
    return (
        <div className='px-2 lg:px-0 mb-8 md:mb-16 max-w-7xl mx-auto'>
            <SectionTitle title={"Explore Supplements for your Specific Need!"} />
            <SupplementsSection />
        </div>
    );
};

export default ExploreSupplements;