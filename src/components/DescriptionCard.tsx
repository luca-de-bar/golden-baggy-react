import React from "react";

const DescriptionCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 bg-white shadow-md rounded-lg h-96 relative">
        {/* Background Image or Color Placeholder */}
        <div className="absolute inset-0 bg-gray-300 rounded-lg"></div>

        {/* Description Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Card Title</h3>
          <p className="text-white text-center">This is a brief description that goes inside the card. It provides an overview or key details.</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
