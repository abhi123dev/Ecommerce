import React from "react";

const BannerBottom = () => {
  const items = [
    {
      icon: "/trophy.svg", // Replace with actual filenames
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: "/guarantee.svg",
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: "/shipping.png",
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: "/customer-support.svg",
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <section className="bg-[#FAF3EA] py-24 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 rounded-lg">
            <img src={item.icon} alt={item.title} className="w-[60px] h-[60px] object-contain" />
            <div>
              <h4 className="font-semibold font-poppins text-[25px] leading-normal text-[#242424]">{item.title}</h4>
              <p className="font-medium font-poppins text-[20px] leading-normal text-[#898989]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerBottom;
