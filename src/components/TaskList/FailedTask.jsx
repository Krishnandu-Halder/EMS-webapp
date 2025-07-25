import React from "react";

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-yellow-600 px-3 text-sm py-1 rounded  ">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod
        tempora sunt error omnis quibusdam.
      </p>
      <div className="mt-2">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
