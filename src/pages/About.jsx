import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import BannerBottom from "../components/BannerBottom";



const About = () => {
  return (
    <>
      <Header />
      <PageBanner title="About"/>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">About</h1>
      </div>
      <BannerBottom />
      <Footer />
    </>
  );
};

export default About;