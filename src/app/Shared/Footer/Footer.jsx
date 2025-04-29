import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#D3F4FA] px-2 py-4 md:py-8'>
             <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-2 mb-8">
                <div className="mb-6 col-span-4">
                <Image 
                    width={200}
                    height={70}
                    src={'/images/website_logo.png'}
                    alt="website logo"
                    />
                <p className="mt-2 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                </div>
                {/* Company Section */}
                <div className='col-span-2'>
                    <h2 className="text-lg font-semibold mb-4">Company</h2>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#32BEDA]">Product</a></li>
                    <li><a href="#" className="hover:text-[#32BEDA]">About Us</a></li>
                    <li><a href="#" className="hover:text-[#32BEDA]">Contact Us</a></li>
                    <li><a href="#" className="hover:text-[#32BEDA]">Blog Us</a></li>
                    </ul>
                </div>

                <div className='col-span-2'>
                    <h2 className="text-lg font-semibold mb-4">Account</h2>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#32BADE]">Log in</a></li>
                    <li><a href="#" className="hover:text-[#32BADE]">My Account</a></li>
                    <li><a href="#" className="hover:text-[#32BADE]">My Account</a></li>
                    </ul>
                </div>

                {/* Customer Service Section  */}
                <div className='col-span-2'>
                    <h2 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h2>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#32BADE]">Return Policy</a></li>
                    <li><a href="#" className="hover:text-[#32BADE]">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[#32BADE]">Terms & Condition</a></li>
                    </ul>
                </div>

                 {/* Contact Info Section */}
                <div className='col-span-2'>
                    <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
                    <ul className="space-y-2 mb-6">
                    <li>Call Us: 833 466 TRUE (8783)</li>
                    <li>Email: name@gmail.com</li>
                    </ul>
                    <div className="flex items-center gap-3">
                        <Image
                            width={40}
                            height={40}
                            alt='social icons'
                            src={'/images/fb.png'}/>
                            
                        <Image
                            width={40}
                            height={40}
                            alt='social icons'
                            src={'/images/yt.png'}/>
                            
                        <Image
                            width={40}
                            height={40}
                            alt='social icons'
                            src={'/images/twitter.png'}/>
                            
                        <Image
                            width={40}
                            height={40}
                            alt='social icons'
                            src={'/images/instagram.png'}/>
                            
                    </div>
                </div>
                </div>

                {/* <hr class="my-8 border-gray-300"> */}

                <div className="text-left text-sm">
                <p>Copyright© 2025 <span className='text-[#32BADE] font-semibold'>True Health Booster</span>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;