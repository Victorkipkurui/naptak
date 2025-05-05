'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'technologies', label: 'Our Technologies' },
  { id: 'contact', label: 'Contact Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200; // +200 to trigger earlier (adjustable)
      let current = 'home';

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollY) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                width={160}
                height={150}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <Link key={section.id} href={`#${section.id}`} onClick={closeMenu}>
                <div className={`cursor-pointer ${activeSection === section.id ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-gray-800 hover:text-gray-900'}`}>
                  {section.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            {sections.map((section) => (
              <Link key={section.id} href={`#${section.id}`} onClick={closeMenu}>
                <div className={`text-lg cursor-pointer ${activeSection === section.id ? 'text-orange-600 underline' : 'text-gray-800 hover:text-gray-900'}`}>
                  {section.label}
                </div>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
