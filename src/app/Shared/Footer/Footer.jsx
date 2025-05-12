import { Headset, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D3F4FA] px-2 py-4 md:py-8 text-primary-color pb-12 md:pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 custom-grid-column md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4 mb-8">
          {/* Logo + Description */}
          <div className="lg:col-span-4 md:col-span-2">
            <Image
              width={335}
              height={70}
              src={"/images/website_logo.png"}
              className="xl:w-[335px] w-[220px] mb-4"
              alt="website logo"
            />
            <p className="max-w-md text-primary-color text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2 lg:text-center md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#32BEDA]">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32BEDA]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32BEDA]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32BEDA]">
                  Blog Us
                </a>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="lg:col-span-1 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#32BADE]">
                  Log in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32BADE]">
                  My Account
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="lg:col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#32BADE]">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32BADE]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32BADE]">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-3 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <ul className="space-y-2 mb-6 lg:mb-10">
              <li className="flex items-center gap-2">
                <Headset className="text-[#32BADE] w-4"/>
                <p><span className="font-medium">Call Us</span>: 833 466 TRUE (8783)</p>  
              </li>
              <li className="flex items-center gap-2">
                <Send className="text-[#32BADE] w-4"/>
                <p className="lg:text-sm xl:text-[15px]"><span className="font-medium">Email</span>:  sales@truehealthbooster.com</p>  
              </li>
            </ul>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                width={40}
                height={40}
                alt="facebook"
                src="/images/fb.png"
              />
              <Image
                width={40}
                height={40}
                alt="youtube"
                src="/images/yt.png"
              />
              <Image
                width={40}
                height={40}
                alt="twitter"
                src="/images/twitter.png"
              />
              <Image
                width={40}
                height={40}
                alt="instagram"
                src="/images/instagram.png"
              />
            </div>
          </div>
        </div>

        {/* <hr class="my-8 border-gray-300"> */}

        <div className="text-left text-sm">
          <p>
            Copyright© 2025{" "}
            <span className="text-[#32BADE] font-semibold">
              True Health Booster
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
