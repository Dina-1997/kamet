const LandingCards = () => {
  return (
    <div className="w-full md:w-[50%] mt-10">
      <div className="flex justify-between mb-7 text-white">
        <p className="uppercase font-light text-lg">most populer </p>
        <div className="arow-right">ArowRight</div>
      </div>
      <div className="cards grid grid-cols-3 gap-20 *:p-3 *:w-full">
        <div className="card border   rounded-lg overflow-hidden">
          <img src="" className="w-full h-40 bg-gray-800" alt="" />
        </div>
        <div className="card border  p-1 rounded-lg overflow-hidden">
          <img src="" className="w-full rounded-lg h-40 bg-gray-800" alt="" />
        </div>
        <div className="card border  p-1 rounded-lg overflow-hidden">
          <img src="" className="w-full h-40 bg-gray-800" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
