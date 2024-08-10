import React from "react";

const DescriptionCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md rounded-lg relative aspect-[4/2]">
        {/* Background Image or Color Placeholder */}
        <div className="absolute inset-0 bg-gray-300 rounded-lg"></div>

        {/* Description Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-white mb-4">Card Title</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl text-white text-center">Brief Description of golden baggy brand</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
