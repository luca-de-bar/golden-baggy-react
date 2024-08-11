import React from "react";

/*
  WHAT IT DOES:
  - The `InfoSection` component displays a section with alternating text and images, providing a flexible layout for presenting information.
  - The component adapts its layout based on the screen size, showing a different arrangement for desktop, tablet, and mobile views.

  HOW TO USE:
  - Use `InfoSection` to present key information, promotional content, or features in a responsive format that adjusts to different device sizes.
  - The component automatically handles the layout based on screen width, so you can place it in any part of your webpage.

  EXAMPLE:
  
  <InfoSection />

  - This will render a responsive section with text and images that adjust their positions based on the screen size.
*/

const InfoSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Desktop and Tablet Section */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* First Row: Text 1 and Image 1 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">Title 1</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio nec sapien dapibus blandit. Nulla facilisi. Integer sed sem ut justo egestas convallis
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/570x370" alt="Immagine di presentazione" className="w-full h-auto max-h-96 object-cover rounded-lg" />
          </div>

          {/* Second Row: Image 2 and Text 2 */}
          <div>
            <img src="https://via.placeholder.com/570x370" alt="Seconda immagine" className="w-full h-auto max-h-96 object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">Rimani con noi!</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio nec sapien dapibus blandit. Nulla facilisi. Integer sed sem ut justo egestas convallis...
              <strong>
                <em>
                  <a href="#" className="text-blue-500 hover:underline">
                    Show more
                  </a>
                </em>
              </strong>
            </p>
          </div>
        </div>

        {/* Tablet Section */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8">
          <div className="md:col-span-2 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Title 1</h2>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio nec sapien dapibus blandit. Nulla facilisi. Integer sed sem ut justo egestas convallis.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/570x370" alt="Immagine di presentazione" className="w-full h-auto max-h-96 object-cover rounded-lg" />
          </div>
          <div>
            <img src="https://via.placeholder.com/570x370" alt="Seconda immagine" className="w-full h-auto max-h-96 object-cover rounded-lg" />
          </div>
          <div className="md:col-span-2 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Title 2</h2>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio nec sapien dapibus blandit. Nulla facilisi. Integer sed sem ut justo egestas convallis...
              <strong>
                <em>
                  <a href="#" className="text-blue-500 hover:underline">
                    Show more
                  </a>
                </em>
              </strong>
            </p>
          </div>
        </div>

        {/* Mobile Section */}
        <div className="lg:hidden md:hidden flex flex-col items-center space-y-8">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Title 1</h2>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio nec sapien dapibus blandit. Nulla facilisi. Integer sed sem ut justo egestas convallis.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/570x370" alt="Immagine di presentazione" className="w-full h-auto max-h-96 object-cover rounded-lg" />
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Title 2</h2>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec odio nec sapien dapibus blandit. Nulla facilisi. Integer sed sem ut justo egestas convallis...
              <strong>
                <em>
                  <a href="#" className="text-blue-500 hover:underline">
                    Show more
                  </a>
                </em>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
