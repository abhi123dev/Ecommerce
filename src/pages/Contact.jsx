import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import BannerBottom from "../components/BannerBottom";
import { Icon } from "@iconify/react";
import phoneIcon from "@iconify-icons/bxs/phone";
import clockIcon from "@iconify-icons/bi/clock-fill";
import locationIcon from "@iconify-icons/ic/round-location-on";

const Contact = () => {
  return (
    <>
      <Header />
      <PageBanner title="Contact" />
      <section className="bg-gray-50 py-10">
  <div className="text-center mb-10">
    <h2 className="text-[36px] font-semibold text-black font-poppins">
      Get In Touch With Us
    </h2>
    <p className="text-[16px] font-poppins font-normal text-[#9F9F9F] max-w-3xl mx-auto">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>

  <div className="max-w-[1140px] mx-auto px-4 grid md:grid-cols-2 gap-10">
    <div className="space-y-6 flex flex-col justify-center item-center w-[393px] h-[537px]">
      <div className="flex items-start space-x-4">
        <Icon icon={locationIcon} className="text-black mt-1" width="20" height="20" />
        <div>
          <h4 className="font-medium font-poppins text-[24px]">Address</h4>
          <p className="text-black text-[16px] font-normal">236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Icon icon={phoneIcon} className="text-black mt-1" width="20" height="20" />
        <div>
          <h4 className="font-medium font-poppins text-[24px]">Phone</h4>
          <p className="text-black text-[16px] font-normal">
            Mobile: (+84) 546-6789<br />Hotline: (+84) 456-6789
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Icon icon={clockIcon} className="text-black mt-1" width="20" height="20" />
        <div>
          <h4 className="font-medium font-poppins text-[24px]">Working Time</h4>
          <p className="text-black text-[16px] font-normal">
            Monday - Friday: 9:00 - 22:00<br />
            Saturday - Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    <form className="space-y-4">
  <label className="font-medium font-poppins text-[16px] mt-4 block px-3" htmlFor="name">Your name</label>
  <input type="text" placeholder="ABC" className="outline-none w-[527px] h-[75px] rounded-2xl  border border-[#9F9F9F] p-3" name="name" />

  <label className="font-medium font-poppins text-[16px] mt-4 block px-3" htmlFor="email">Email address</label>
  <input type="email" placeholder="Abc@def.com" className="outline-none w-[527px] h-[75px] rounded-2xl  border border-[#9F9F9F] p-3" name="email" />

  <label className="font-medium font-poppins text-[16px] mt-4 block px-3" htmlFor="subject">Subject</label>
  <input type="text" placeholder="This is optional" className="outline-none w-[527px] h-[75px] rounded-2xl  border border-[#9F9F9F] p-3" name="subject" />

  <label className="font-medium font-poppins text-[16px] mt-4 block px-3" htmlFor="message">Message</label>
  <textarea rows="4" placeholder="Hi! I’d like to ask about" className="w-[527px] h-[120px] border border-[#9F9F9F] p-3 resize-none outline-none rounded-2xl" name="message"></textarea>

  <button type="submit" className="bg-[#B88E2F] w-[237px] h-[55px] text-white text-[16px] font-normal font-poppins rounded-2xl">Submit</button>
</form>

  </div>
</section>

      <BannerBottom />
      <Footer />
    </>
  );
};

export default Contact;
