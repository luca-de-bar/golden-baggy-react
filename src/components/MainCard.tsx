import React from "react";
import DrawerButton from "./DrawerButton";

/*
  WHAT IT DOES:
  - The `MainCard` component is a visually engaging feature section that highlights a main product or item, complete with a video background, product details, and a call-to-action button.

  HOW IT WORKS:
  - The component displays a video background that loops and plays automatically, setting the tone for the featured product.
  - The central product card is displayed with a title ("ARISE"), and a `DrawerButton` that allows users to explore more details about the product.
  - The `DrawerButton` opens a drawer when clicked, showing more images and information about the product, including available sizes and price.
  - The content below the card provides a brief description of the product, emphasizing its features and encouraging user engagement.

  HOW TO USE:
  - This component is ideal for a landing page or a section where a key product needs to be highlighted.
  - Customize the `DrawerButton` props to reflect different product details, images, and pricing.
  - Ensure the video file used for the background is available at the specified path or adjust the `src` attribute accordingly.

  EXAMPLE:
  <MainCard />
  
  - This will render a hero section with a video background, a product card, and a button that opens a drawer with more product details.
*/

  const images = [
    "https://via.placeholder.com/300x400.png?text=Image+1",
    "https://via.placeholder.com/300x400.png?text=Image+2",
    "https://via.placeholder.com/300x400.png?text=Image+3",
    "https://via.placeholder.com/300x400.png?text=Image+4",
    "https://via.placeholder.com/300x400.png?text=Image+5",
    "https://via.placeholder.com/300x400.png?text=Image+6",
  ];

const MainCard: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-16">
      {/* Video Background */}
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline>
        <source src="/MainCardLoopVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Card Content */}
      <div className="flex flex-col items-center mt-8 relative z-10">
        <div className="w-full max-w-xs p-4 bg-white shadow-lg rounded-lg h-96 shadow-black/50">
          {/* Rectangular Card */}
          {/* Placeholder for the image */}
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-2 text-white">ARISE</h3>
          <DrawerButton
            title="Arise"
            description="Rise from the ashes with this new brand look"
            images={images}
            price="$99.99"
            sizes={["S", "M", "L", "XL"]}
            buttonText="Shop Now"
            buttonClassName="bg-purple-300 text-slate-950 hover:text-gray-300 hover:bg-purple-950 transistion-all"
          />
        </div>
        {/* New Title and Description Section */}
        <div className="mt-12 text-center max-w-md">
          <h2 className="text-lg font-semibold mb-2 text-white">Main Item Description</h2>
          <p className="text-white mt-5 mb-12 px-3">
            This is a brief description of the main item displayed in the card above. It provides additional details about the item, its features, and any other relevant
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
