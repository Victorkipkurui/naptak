import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Nav Links */}
        <nav className="flex gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#technologies" className="hover:text-white">Technologies</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" className="hover:text-white"><FaFacebook /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
        </div>
      </div>

      <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
}
