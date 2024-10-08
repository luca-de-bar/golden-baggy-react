/*
  WHAT IT DOES:
  - The `HeroBanner` component creates a full-width hero section typically placed at the top of a webpage.
  - It includes a background image, a dark overlay, and centered text content with a call-to-action button.

  HOW TO USE:
  - Use the `HeroBanner` component as the introductory section of your webpage to draw attention and guide users towards a key action.
  - The background image URL can be replaced with your desired image, and the text content (title, description, and button) can be customized.

  EXAMPLE:

    <HeroBanner />
    
  - This will render a visually striking banner with a background image, overlaid with a dark filter, and display a title, description, and "Shop Now" button.
*/

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full bg-gray-800 h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img src="https://via.placeholder.com/1920x1080" alt="Hero Banner" className="absolute inset-0 w-full h-full object-cover opacity-60" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Herobanner title</h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-8">Herobanner text</p>
        <a href="#shop-now" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-lg transition duration-300">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
