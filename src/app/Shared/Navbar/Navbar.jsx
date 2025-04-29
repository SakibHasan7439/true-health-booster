import { poppins } from "@/app/layout";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, ShoppingCart, LayoutDashboard } from "lucide-react"; // icons
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
const Navbar = () => {
    return (
    <header className={`w-full bg-[#F6F6F6] pt-8 ${poppins.className}`}>
      <div className="max-w-7xl p-2 mx-auto flex items-center justify-between h-16">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-[#32BADE]">
          <Image 
            width={326}
            height={68}
            className="w-[200px] lg:w-[250px] xl:w-[326px]"
            src={'/images/website_logo.png'}
            alt="website logo"
            />
        </Link>

        {/* Menu Items (Desktop Only) */}
        <nav className="hidden md:flex lg:gap-4 md:gap-2 xl:gap-8">
            <NavItem link={""} item={"Home"}/>
            <NavItem link={"product"} item={"Product"}/>
            <NavItem link={"blog"} item={"Blog"}/>
            <NavItem link={"aboutUs"} item={"About Us"} />
            <NavItem link={"contactUs"} item={"Contact Us"} />
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center md:gap-4 lg:gap-0">
          <Search className="hoverIcon" />
          <ShoppingCart className="hoverIcon" />
          <LayoutDashboard className="hoverIcon hidden md:block"/>
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <LayoutDashboard className="hoverIcon"/>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
                <NavItem link={""} item={"Home"}/>
                <NavItem link={"product"} item={"Product"}/>
                <NavItem link={"blog"} item={"Blog"}/>
                <NavItem link={"aboutUs"} item={"About Us"} />
                <NavItem link={"contactUs"} item={"Contact Us"} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    );
};

export default Navbar;