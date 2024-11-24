"use client"
import { useState } from 'react';
import Link from 'next/link';
import {FaShoppingBag} from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <h1>NIKE Shoes</h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-lg hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-gray-300">
              About
            </Link>
            <Link href="/shoes" className="text-lg hover:text-gray-300">
              Shoes
            </Link>
            <Link href="/contact" className="text-lg hover:text-gray-300">
              Contacts
              </Link>
              <FaShoppingBag/>

          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden bg-blue-500 text-white space-y-4 py-4 px-6`}
        >
          <Link href="/" className="text-lg hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-lg hover:text-gray-300">
            About
          </Link>
          <Link href="/shoes" className="text-lg hover:text-gray-300">
            Shoes
          </Link>
          <Link href="/contact" className="text-lg hover:text-gray-300">
            Contact
          </Link>
          <FaShoppingBag/>

        </div>
      </div>
    </header>
  );
}
