// src/components/PageBanner.jsx
const PageBanner = ({ title }) => {
  return (
    <div className="relative w-full h-[316px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image with blur and opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 backdrop-blur-[6] scale-110"
        style={{ backgroundImage: 'url("/banner.jpg")' }}
      ></div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-white opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="mx-auto w-[77px]" />

        {/* Page Title */}
        <h1 className="text-5xl md:text-3xl font-bold text-[#333] mb-2">{title}</h1>

        {/* Breadcrumb */}
        <p className="text-base">
          <span className="text-black">Home</span> &gt; <span className="text-gray-600">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
