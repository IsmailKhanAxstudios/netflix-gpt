import React from "react";

const BackgroundTitle = ({ title, desc }) => {
  return (
    <div className="absolute text-white w-1/3 z-20 pl-16 w-screen aspect-video pt-36 bg-gradient-to-r from-black via-black to-transparent">
      <h1 className="font-bold text-6xl">{title}</h1>
      <div>{desc}</div>
      <div className="flex mt-4 mb-4">
        <button type="text" className="py-2 px-6 bg-slate-500 rounded-lg">
          Play
        </button>
        <button type="text" className="py-2 px-6 bg-slate-500 rounded-lg ml-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default BackgroundTitle;
