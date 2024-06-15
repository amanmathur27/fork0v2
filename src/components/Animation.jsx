import React from "react";

const Animation = () => {
  return (
    <div>
      <div class="flex justify-center items-center h-screen">
        <div class="animate-spin ease-linear rounded-full w-32 h-32 border-t-2 border-b-2 border-white"></div>
        <div class="animate-spin ease-linear rounded-full w-32 h-32 border-t-2 border-b-2 border-white ml-3"></div>
        <div class="animate-spin ease-linear rounded-full w-32 h-32 border-t-2 border-b-2 borderwhite ml-3"></div>
      </div>
    </div>
  );
};

export default Animation;
