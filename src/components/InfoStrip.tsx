
/*
  WHAT IT DOES:
  - The `InfoStrip` component displays a horizontal strip with a marquee effect that scrolls a message across the screen.

  HOW TO USE:
  - Include `InfoStrip` at the top or bottom of your webpage to ensure the message is visible to users.
  - The text within the marquee can be customized to display any relevant message or promotion.

  EXAMPLE:

    <InfoStrip />

  - This will render a scrolling message on a yellow background, displaying the provided promotional text.
*/
const InfoStrip = () => {
  return (
    <div className="bg-yellow-400 text-slate-950 py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee whitespace-nowrap">
          <span className="mx-4 sm:mx-8 md:mx-12 font-semibold">Welcome to goldenbaggy! Enjoy free shipping on orders over $50!</span>
        </div>
      </div>
    </div>
  );
};

export default InfoStrip;
