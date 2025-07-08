import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-[#FFFFFF] h-[505px] border-t border-b border-[#0000002B] font-poppins text-black">
      {/* Content Container */}
      <div className="max-w-[1240.01px] h-[419px] mx-auto px-4 flex flex-col justify-between">
        {/* Main Sections */}
        <div className="flex justify-between pt-12 h-[312px]">
          {/* Left Column (Address) */}
          <div className="w-[285px] space-y-2">
            <h3 className="font-bold font-poppins text-[24px]">Funiro.</h3>
            <p className="font-normal font-poppins text-[16px] text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Right Sections */}
          <div className="flex justify-between w-[710px] h-[312px]">
            {/* Links Section */}
            <div className="w-[176px] h-full">
              <h4 className="font-medium text-[#9F9F9F] mb-6 font-poppins text-[16px]">Links</h4>
              <ul className=" h-[233px] w-[66px] space-y-4 font-medium text-blackfont-poppins text-[16px]">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="w-[176px] h-full">
              <h4 className="font-medium text-[#9F9F9F] mb-6 font-poppins text-[16px]">Help</h4>
              <ul className="h-[163px] w-[140px] space-y-4 font-medium text-blackfont-poppins text-[16px]">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="w-[358px] h-full">
              <h4 className="font-medium text-[#9F9F9F] mb-6 font-poppins text-[16px]">Newsletter</h4>
              <div className="flex border-b border-black w-full max-w-[300px]">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent outline-none placeholder-[#9F9F9F] w-full font-normal font-poppins text-[14px]"
                />
                <button className="text-black font-poppins text-[14px]font-medium uppercase">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="h-[59px] border-t border-[#D9D9D9] flex items-end px-4 text-[#000000] text-[16px] font-normal font-poppins mb-3">
          © 2023 Funiro. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
