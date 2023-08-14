import React from "react";
// import Image from "next/image";
// import { AiOutlineMenu } from "react-icons/ai";
import Hogwart1 from "./page2/hogwart1";
import Hogwart2 from "./page2/hogwart2";

const page = () => {
  return (
    <>
      {/* <div className="bg-[#E7CEAD]">
      <nav className=" flex justify-between items-center h-[128px] p-8 border-b-[0.3px] border-black">
        <div className="text-2xl font-serif">Amsterdam,NL</div>
        <Image
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
          alt="halua"
          width={205}
          height={175}
          className=""
        />
        <AiOutlineMenu className="text-2xl" />
      </nav>

      <div className="h-screen flex items-start justify-center mt-8 ">
        <div
          className=" w-[35%] flex-col items-start justify-center ml-10 
        "
        >
          <img
            src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
            alt="hero1"
            width={460}
            height={310}
            className="hover:scale-105 ease-in-out duration-300"
          />
          <div className="flex justify-start items-center gap-3 mt-5">
            <span className="text-[29px]">AVRO|K</span>
            <div className="bg-[#B93C12] flex justify-center items-center h-6 p-3 rounded-lg text-xl">
              NEW
            </div>
          </div>

          <div className="w-[90%] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            inventore rem ullam, corporis totam atque vel illo officiis.
          </div>
        </div>

        <div className=" w-[30%] border-l-[0.5px] border-r-[0.5px] border-[black] ">
          <div className="flex items-center justify-center text-[53px] font-semibold">
            ALL WORK!
          </div>
          <div className="text-[40px] tracking-tighter text-center px-20 ">
            A Featured selection the latest work- of the last years.
          </div>
          <div className="mt-10 tracking-tighter text-center text-[25px]">
            {" "}
            <b>TIP!</b> Drag sideways to navigate.
          </div>
        </div>

        <div
          className=" w-[35%] flex-col items-start justify-center ml-10
        "
        >
          <img
            src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
            alt="hero1"
            width={460}
            height={310}
            className="hover:scale-105 ease-in-out duration-300"
          />
          <div className="flex justify-start items-center gap-3 mt-5">
            <span className="text-[29px]">AVRO|K</span>
            <div className="bg-[#B93C12] flex justify-center items-center h-6 p-3 rounded-lg text-xl">
              NEW
            </div>
          </div>

          <div className="w-[90%] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            inventore rem ullam, corporis totam atque vel illo officiis.
          </div>
        </div>
      </div>

      
    </div> */}
        <Hogwart1 className="absolute"/>
        <Hogwart2 className="absolute"/>
    </>
  );
};

export default page;
