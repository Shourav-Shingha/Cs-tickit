import React from "react";
import mybg from "../../assets/vector1.png";

const Banner = ({cardDisable}) => {
  return (
    <div className="bg-gray-100 flex justify-between p-16">
      <div className="relative w-[48%] overflow-hidden rounded-2xl bg-linear-to-br from-purple-800 via-purple-700 to-pink-400 py-16 text-center shadow-xl">
        <div
          className="absolute inset-0 opacity-100 bg-no-repeat bg-bottom-left"
          style={{
            backgroundImage: `url(${mybg})`,
            backgroundSize: "45% 100%",
          }}
        />
        <div
          className="absolute inset-0 opacity-100 bg-no-repeat bg-bottom-left  scale-x-[-1]"
          style={{
            backgroundImage: `url(${mybg})`,
            backgroundSize: "45% 100%",
          }}
        />
        <div className="relative z-10 flex flex-col gap-2">
          <h1 className="text-2xl font-medium text-white/90">In-Progress</h1>
          <span className="text-6xl font-extrabold text-white">{cardDisable.filter(task => !task.resolved).length}</span>
        </div>
      </div>
      <div className="relative w-[48%] overflow-hidden rounded-2xl bg-linear-to-r from-[#5de270] via-[#31a37c] to-[#007b83] py-16 text-center shadow-xl">
        <div
          className="absolute inset-0 opacity-100 bg-no-repeat bg-bottom-left"
          style={{
            backgroundImage: `url(${mybg})`,
            backgroundSize: "45% 100%",
          }}
        />
        <div
          className="absolute inset-0 opacity-100 bg-no-repeat bg-bottom-left  scale-x-[-1]"
          style={{
            backgroundImage: `url(${mybg})`,
            backgroundSize: "45% 100%",
          }}
        />
        <div className="relative z-10 flex flex-col gap-2">
          <h1 className="text-2xl font-medium text-white/90">Resolve</h1>
          <span className="text-6xl font-extrabold text-white">{cardDisable.filter(task => task.resolved).length}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
