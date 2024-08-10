import React from "react";

const SingleCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm p-4 bg-white shadow-lg rounded-lg aspect-[3/4] shadow-black/50">
        {/* Rectangular Card with Height as the Long Side */}
        <div className="flex justify-center items-center h-full">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">1</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2">Card Title</h3>
      </div>
    </div>
  );
};

export default SingleCard;
