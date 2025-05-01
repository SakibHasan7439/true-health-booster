'use client';

import { Home, LayoutGrid, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
    { href: '/', icon: <Home />, label: 'Home' },
    { href: '/categories', icon: <LayoutGrid />, label: 'Categories' },
    { href: '/cart', icon: <ShoppingCart />, label: 'Cart' },
  ];
const MobileNavbar = () => {
    const pathname = usePathname();
    return (
        <nav className='fixed z-50  bottom-0 md:hidden left-0 right-0 bg-[#3ABADE] border-t rounded-t-xl border-gray-200'>
            <ul className='flex justify-around text-white'>
            {navItems.map((item) => {
          const isActive = pathname === item.href;

          const iconWrapperClasses = `
            flex items-center justify-center border-t-[#3ABEDE] border-t-2 rounded-t-full transition-all duration-300
            ${isActive ? 'translate-y-[-30px] w-14 h-14 bg-white text-[#3ABEDE] rounded-full shadow-md' : 'text-white'}
          `;

          return (
            <li key={item.href} className='relative flex flex-col items-center justify-center'>
              <Link href={item.href} className='flex flex-col items-center group'>
                <div className={iconWrapperClasses}>
                  <div className='text-xl'>{item.icon}</div>
                </div>
                {isActive && (
                  <span className='text-white absolute bottom-1 text-sm font-medium'>
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
            </ul>
        </nav>
    );
};

export default MobileNavbar;