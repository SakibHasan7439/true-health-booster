import React from 'react';
import { Tabs } from 'antd';
import TextDescription from './TextDescription';
import { poppins } from '@/app/layout';

const ProductInfo = ({details}) =>{
    const onChange = key => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <span className={`text-[14px] md:text-xl font-semibold ${poppins.className}`}>Description</span>,
          children: <TextDescription details={details}/>,
        },
        {
          key: '2',
          label: <span className={`text-[14px] md:text-xl font-semibold ${poppins.className}`}>Additional Information</span>,
          children:  <TextDescription details={details}/>,
        },
        {
          key: '3',
          label: <span className={`text-[14px] md:text-xl font-semibold ${poppins.className}`}>Dosage</span>,
          children:  <TextDescription details={details}/>,
        },
      ];

    return (
        <div className={`pb-5 lg:pb-10 xl:pb-22 ${poppins.className}`}>
            <Tabs 
                defaultActiveKey="1" 
                items={items} 
                onChange={onChange}
                className='custom-tabs'
            />
        </div>
    )

}
export default ProductInfo;