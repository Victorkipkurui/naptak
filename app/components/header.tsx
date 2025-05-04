'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" onClick={closeMenu}>
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'Our Technologies', 'Contact Us'].map((label, idx) => {
              const hrefs = ['#home', '#about', '#services', '#technologies', '#contact'];
              return (
                <Link key={idx} href={hrefs[idx]}>
                  <div className="text-gray-600 hover:text-gray-900 cursor-pointer">{label}</div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            {['Home', 'About', 'Services', 'Our Technologies', 'Contact Us'].map((label, idx) => {
              const hrefs = ['#home', '#about', '#services', '#technologies', '#contact'];
              return (
                <Link key={idx} href={hrefs[idx]} onClick={closeMenu}>
                  <div className="text-gray-600 hover:text-gray-900 text-lg cursor-pointer">{label}</div>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
