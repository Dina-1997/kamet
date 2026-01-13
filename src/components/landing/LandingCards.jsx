import { FaRegCircleRight, FaUserGroup } from "react-icons/fa6";

const LandingCards = () => {
  return (
    <div className="w-full md:w-[50%] mt-10">
      <div className="flex justify-between mb-4 text-white">
        <p className="uppercase font-light text-lg">most populer </p>
        <div className="arow-right">
          <FaRegCircleRight size={"24px"} />
        </div>
      </div>
      <div className="cards grid grid-cols-3 gap-20 *:p-3 *:w-full text-white">
        <div className="card border rounded-lg overflow-hidden">
          <img src="" className="w-full h-40 bg-gray-800" alt="" />
          <p className="capitalize mt-2 text-xl font-medium">trip to sina </p>
          <p className="flex items-center">
            <FaUserGroup className="mr-2" />
            27 pepole going
          </p>
        </div>
        <div className="card border  p-1 rounded-lg overflow-hidden">
          <img src="" className="w-full rounded-lg h-40 bg-gray-800" alt="" />
          <p className="capitalize mt-2 text-xl font-medium">trip to sina </p>
          <p className="mt-1">27 pepole going</p>
        </div>
        <div className="card border  p-1 rounded-lg overflow-hidden">
          <img src="" className="w-full h-40 bg-gray-800" alt="" />
          <p className="capitalize mt-2 text-xl font-medium">trip to sina </p>
          <p className="mt-1">27 pepole going</p>
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
