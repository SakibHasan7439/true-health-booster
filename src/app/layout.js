import { Poppins } from 'next/font/google'
import { Signika } from 'next/font/google';

import "./globals.css";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import MobileNavbar from './Shared/mobile-navbar/MobileNavbar';

const metadata = {
  title: "True Health Booster",
  description: "Generated by create next app",
};

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-poppins',
});

export const signika = Signika({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you want
  variable: '--font-signika',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <MobileNavbar />
        <Footer />
      </body>
    </html>
  );
}
