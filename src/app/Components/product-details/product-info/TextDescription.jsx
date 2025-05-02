import React from 'react';
import ListInfo from './ListInfo';
import MoreDescription from './MoreDescription';

const TextDescription = ({details}) => {
    return (
        <div className='w-full text-[12px] px-2 xl:px-0 lg:text-[16px] font-medium'>
            <p className='xl:leading-6 pb-4 lg:pb-7'>{details?.descriptionOne}</p>

            <ul className='pb-6 lg:pb-10 mb-6 border-b border-[#E8EAE8]'>
                <ListInfo 
                    itemKey={'type of packing: '}
                    value={details?.type_of_packing}
                />
                <ListInfo 
                    itemKey={'colors: '}
                    value={details?.colors.map((color) => color + ", ")}
                />
                <ListInfo 
                    itemKey={'quantity_per_case: '}
                    value={details?.quantity_per_case}
                />
                <ListInfo 
                    itemKey={'ethyl_alcohol: '}
                    value={details?.ethyl_alcohol}
                />
                <ListInfo 
                    itemKey={'faces_in_one_carton: '}
                    value={details?.faces_in_one_carton}
                />
            </ul>
            <MoreDescription description={details?.descriptionTwo}/>
            <MoreDescription description={details?.descriptionThree} />
            <MoreDescription description={details?.descriptionFour} />

        </div>
    );
};

export default TextDescription;