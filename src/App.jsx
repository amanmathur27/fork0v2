import React from "react";
import Socials from "./components/Socials";
import MatrixEffect from "./components/Matrix";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen bg-black flex items-center justify-center flex-col overflow-hidden">
        <MatrixEffect />
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[30%] h-[45%] top-0 left-20 white__gradient" />
        <h1 className="font-Peta relative sm:text-[300px] font-bold outline-text-gradient leading-[0px] tracking-normal text-black [text-shadow:var(--tw-shadow-color)_1px_1px_1px] shadow-green-700 z-[2] text-[100px]">
          fork<span className="font-FiraCode">0</span>
        </h1>
        <div className="z-20 absolute bottom-32">
          <Socials />
        </div>
      </div>
    </>
  );
};

export default App;
