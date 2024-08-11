import React from "react";

/*
  WHAT IT DOES:
  - The `SingleCard` component renders a single, centered card with a title below it. The card is designed to be visually simple, focusing on the content within.

  HOW IT WORKS:
  - The card has a flexible width that adjusts across different screen sizes (`xs`, `sm`, `md`, `lg`), maintaining a consistent aspect ratio of 3:4.
  - Inside the card, the content is centered both vertically and horizontally, with the card number ("1") displayed prominently.
  - Below the card, the component displays a title that scales appropriately with the screen size.

  HOW TO USE:
  - Include the `SingleCard` component wherever you need a standalone card element.
  - Customize the card content and title by replacing the placeholder text with the desired content.

  EXAMPLE:

    <SingleCard />

  - This will render a centered card with the number "1" inside and "Card Title" below it.
*/

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
