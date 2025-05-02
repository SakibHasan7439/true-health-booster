import React from 'react';

const MoreDescription = ({description}) => {
    return (
        <p className='xl:leading-6 pb-4 lg:pb-7'>
            {description}
        </p>
    );
};

export default MoreDescription;