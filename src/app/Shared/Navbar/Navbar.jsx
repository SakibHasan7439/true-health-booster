"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User } from "lucide-react"; // icons
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    const menuItems = ["Home", "Products", "Blog", "AboutUs", "ContactUs"];
    return (
    <header className="w-full bg-[#F6F6F6]">
      <div className="max-w-7xl p-2 mx-auto flex items-center justify-between h-16">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-[#32BADE]">
          <Image 
            width={200}
            height={70}
            src={'/images/website_logo.png'}
            alt="website logo"
            />
        </Link>

        {/* Menu Items (Desktop Only) */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={`/${item.toLowerCase()}`} className="text-gray-700 hover:text-[#32BADE] font-medium">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#32BADE]" />
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#32BADE]" />
          <Image 
                width={40}
                height={40}
                src={'/images/navIcon.png'}
                alt="navbar icon"/>
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger className="md:hidden">
             <Image 
                width={40}
                height={40}
                src={'/images/navIcon.png'}
                alt="navbar icon"/>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex p-4 flex-col gap-6 mt-10">
                {menuItems.map((item, idx) => (
                  <Link key={idx} href={`/${item.toLowerCase()}`} className="text-lg text-gray-800 hover:text-[#32BADE]">
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    );
};

export default Navbar;