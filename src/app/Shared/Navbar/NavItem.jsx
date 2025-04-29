"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavItem = ({link, item}) => {
    const pathname = usePathname();
    const targetPath = link === '' ? '/' : `/${link}`;
    const isActive = 
        pathname === targetPath || 
        (pathname.startsWith(targetPath) && targetPath !== '/') ||
        (pathname === '/' && targetPath === '/');

        console.log(pathname);
        console.log(targetPath);
        console.log(targetPath === pathname);

    return (
        <Link href={targetPath} className={`text-gray-700  flex hover:text-[#32BADE] items-center font-medium ${isActive ? 'font-semibold text-[#32bade]' : ''}`}>
              {item} <p className="xl:pl-8 hidden md:block lg:pl-4 md:pl-2 pb-2 font-bold text-2xl text-[#32BADE]">.</p>
        </Link>
    );
};

export default NavItem;