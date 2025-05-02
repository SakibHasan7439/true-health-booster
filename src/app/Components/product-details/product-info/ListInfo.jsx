import React from 'react';

const ListInfo = ({itemKey, value}) => {
    return (
        <li className='flex items-center gap-4 lg:gap-6 xl:gap-9 mb-[4] list-disc'>
            <p className='text-[#32BADE] w-[130px] capitalize'>{itemKey}</p>
            <p className='text-primary-color'>{value}</p>
        </li>
    );
};

export default ListInfo;