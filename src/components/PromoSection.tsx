const PromoSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Promo Text */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Summer Sale is Here!</h2>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Enjoy up to 50% off on all our products. Limited time offer, hurry up and grab your favorite items before they're gone!
          </p>
        </div>

        {/* Call to Action */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <a href="#" className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
