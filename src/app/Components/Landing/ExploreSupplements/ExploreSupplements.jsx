import React from 'react';
import SectionTitle from '../section-title/SectionTitle';
import SupplementsSection from './supplements-section/SupplementsSection';

const ExploreSupplements = () => {
    return (
        <div className='px-2 lg:px-0 max-w-7xl mx-auto'>
            <SectionTitle title={"Explore Supplements for your Specific Need!"} />
            <SupplementsSection />
        </div>
    );
};

export default ExploreSupplements;