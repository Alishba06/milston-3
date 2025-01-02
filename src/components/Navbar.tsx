import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white sticky top-0 z-20 shadow-lg">
      {/* Brand Logo */}
      <Link href="/" className="text-3xl font-extrabold tracking-wide">
        Dev<span className="text-orange-500">Sphere</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-x-6">
        <Link
          href="/"
          className="text-sm font-medium hover:text-orange-500 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:text-orange-500 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/blogs"
          className="text-sm font-medium hover:text-orange-500 transition duration-300"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:text-orange-500 transition duration-300"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Toggle & Utilities */}
      <div className="flex items-center gap-x-4">
        {/* Social Media */}
        {/* <SocialMedia /> */}

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white focus:outline-none">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </header>
  );
}
