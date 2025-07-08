import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiAccountAlertOutline } from '@mdi/js';
import { Icon as IconifyIcon } from '@iconify/react';
import searchIcon from '@iconify-icons/akar-icons/search';
import heartIcon from '@iconify-icons/akar-icons/heart';
import cartIcon from '@iconify-icons/ant-design/shopping-cart-outlined';
import menuIcon from '@iconify-icons/ic/round-menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-sm py-4 px-2 bg-white z-50 relative">
      
      <div className="max-w-screen-xl grid grid-cols-3 items-center px-6">

        
        {/* ✅ Left-aligned Logo */}
        <div className="flex justify-start items-center">
          <h1 className="font-montserrat font-bold text-[34px] text-gray-800 flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span>Furniro</span>
          </h1>
        </div>

        {/* ✅ Centered Navigation */}
        <nav className="hidden md:flex justify-center space-x-8 text-sm text-base">
          <a href="/" className="text-gray-600 hover:text-black">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-black">Shop</a>
          <a href="/about" className="text-gray-600 hover:text-black">About</a>
          <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>

        {/* ✅ Right Icons & Mobile Menu */}
        <div className="flex justify-end items-center space-x-6">
          {/* Hamburger for small screens */}
          

          {/* Icons only visible on md and up */}
          <div className="flex items-center space-x-6">
            <Icon path={mdiAccountAlertOutline} size={1} className=" hidden md:flex text-gray-700 hover:text-black cursor-pointer" />
            <IconifyIcon icon={searchIcon} width="22" height="22" className="text-gray-700 hover:text-black cursor-pointer" />
            <IconifyIcon icon={heartIcon} width="22" height="22" className="text-gray-700 hover:text-black cursor-pointer" />
            <IconifyIcon icon={cartIcon} width="22" height="22" className=" hidden md:flex text-gray-700 hover:text-black cursor-pointer" />
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            <IconifyIcon icon={menuIcon} width="28" height="28" />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-6 pt-4 pb-2 space-y-2 shadow">
          <a href="/" className="block text-gray-600 hover:text-black">Home</a>
          <a href="/shop" className="block text-gray-600 hover:text-black">Shop</a>
          <a href="/about" className="block text-gray-600 hover:text-black">About</a>
          <a href="/contact" className="block text-gray-600 hover:text-black">Contact</a>
          <div className="flex flex-col  items-start pt-2">
            <Icon path={mdiAccountAlertOutline} size={1} className="text-gray-700 hover:text-black cursor-pointer mb-3" />
            <IconifyIcon icon={cartIcon} width="22" height="22" className="text-gray-700 hover:text-black cursor-pointer" />
          </div>
          
        </div>
      )}
    </header>
  );
};

export default Header;
