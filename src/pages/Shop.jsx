import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import BannerBottom from "../components/BannerBottom";



const Shop = () => {
  return (
    <>
      <Header />
      <PageBanner title="Shop"/>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
      </div>
      <BannerBottom />
      <Footer />
    </>
  );
};

export default Shop;