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
