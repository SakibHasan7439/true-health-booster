import React from 'react';
import { Breadcrumb } from 'antd';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { poppins } from '@/app/layout';
const PageBreadcrumb = ({route, title, className}) => (
  <div className={`max-w-7xl pb-6 ${poppins.className} ${className} lg:pb-10 px-2 xl:px-0 mx-auto pt-6 md:pt-10`}>
    <Breadcrumb
    separator={<ChevronRight size={14} className='mt-[5px]'/>}
    items={[
      {
        title: <Link className='items-center text-primary-color font-medium text-[16px]' href="/">
          <div><Home size={16} className='mb-[2px]'/></div>
          <p className={`${poppins.className}`}>Home</p>
        </Link>,
      },
      {
        title: <Link className='items-center font-medium text-[16px]' href={`/${route}`}>
          <p className={`active-link ${poppins.className}`}>{title}</p>
        </Link>,
      },
    ]}
  />
  </div>
);
export default PageBreadcrumb;