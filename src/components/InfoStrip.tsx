import React from 'react';

const InfoStrip = () => {
  return (
    <div className="bg-slate-950 text-white py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee whitespace-nowrap">
          <span className="mx-4 sm:mx-8 md:mx-12">
            Welcome to our e-commerce store! Enjoy free shipping on orders over $50!
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoStrip;
