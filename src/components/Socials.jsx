import React from "react";
import { BiLogoDiscord } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    // <div>
    //   <div className="text-white flex -rotate-90 space-x-8">
    //     <span className="flex">
    //       <a href="" className="flex items-center gap-2">
    //         <p className="font-semibold">Discord</p>
    //         <BiLogoDiscord size={'1.6em'}/>
    //       </a>
    //     </span>
    //     <span>
    //       <a href="" className="flex items-center gap-2">
    //         <p className="font-semibold">Email</p>
    //         <MdEmail size={'1.6em'}/>
    //       </a>
    //     </span>
    //     <span>
    //       {" "}
    //       <a href="" className="flex items-center gap-2">
    //         <p className="font-semibold">Twitter</p>
    //         <FaSquareXTwitter size={'1.6em'}/>
    //       </a>
    //     </span>
    //   </div>
    // </div>

    <div>
      <div className="text-slate-400 flex space-x-8 items-center">
        {/* <span className="flex">
          <a href="" className="flex items-center gap-2 hover:scale-110 hover:-translate-y-1 duration-100">
            <p className="font-semibold">Discord</p>
            <BiLogoDiscord size={"1.6em"} />
          </a>
        </span> */}

        {/* <span>
          {" "}
          <a href="https://x.com/fork0xyz?t=fJVm6WYOX06WDcauhIPrew&s=09" className="flex items-center gap-2 hover:scale-110 hover:-translate-y-1 duration-100" target="_blank">
            <p className="font-semibold">Twitter</p>
            <FaSquareXTwitter size={"1.6em"} />
          </a>
        </span> */}
        <a href="https://x.com/fork0xyz?t=fJVm6WYOX06WDcauhIPrew&s=09" target="_blank" className="bg-green-950 text-slate-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-6 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Socials;
