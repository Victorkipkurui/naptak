'use client'
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#home" className="hover:text-white text-sm md:text-base">Home</Link>
            <Link href="#about" className="hover:text-white text-sm md:text-base">About</Link>
            <Link href="#services" className="hover:text-white text-sm md:text-base">Services</Link>
            <Link href="#technologies" className="hover:text-white text-sm md:text-base">Our Technologies</Link>
            <Link href="/contact" className="hover:text-white text-sm md:text-base">Contact Us</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-xl md:text-2xl">
            <Link href="#" className="hover:text-white transition-colors duration-200">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm mt-6 md:mt-4">
          &copy; {new Date().getFullYear()} NAPTAK AFRICA CONSULTANTS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
