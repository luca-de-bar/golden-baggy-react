const GetExclusive: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titolo */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Access to Exclusive Items!</h2>

        {/* Descrizione */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Purchase any of our premium items and unlock access to our <span className="text-yellow-400 font-semibold">Exclusive</span> section where you can shop for unique, limited
          edition pieces available only to our most valued customers.
        </p>

        {/* Call to Action */}
        <a href="#" className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300">
          Shop Now & Get Exclusive Access
        </a>
      </div>
    </div>
  );
};

export default GetExclusive;
