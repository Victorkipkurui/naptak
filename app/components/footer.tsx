import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Nav Links */}
        <nav className="flex gap-6">
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#technologies" className="hover:text-white">Technologies</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <Link href="#" className="hover:text-white"><FaFacebook /></Link>
          <Link href="#" className="hover:text-white"><FaTwitter /></Link>
          <Link href="#" className="hover:text-white"><FaInstagram /></Link>
          <Link href="#" className="hover:text-white"><FaLinkedin /></Link>
        </div>
      </div>

      <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
}
