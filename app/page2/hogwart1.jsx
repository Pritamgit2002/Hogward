import React from "react";
import Image from "next/image";
import "./font.css";

const Hogwart1 = () => {
  return (
    <div className="container">
      <div className="pt-8 ">
        <div className="flex items-center justify-between bg-[#CDB090] border-t-[0.8px] border-b-[0.5px] border-[black] w-[135vw] md:w-[98vw] mx-2">
          
          <div className=" h-36 px-6 hidden md:block">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={115}
            height={20}
            className="p-2"
          />
          </div>

          <div className=" font-serif text-[30px] md:text-[85px] text-center pb-4  head1-font tracking-widest bg-[#CDB090] text-black font-semibold">
            DAILY PROPHET
            <div className="text-[12px] mt-[-22px] pt-5 head2-font font-bold text-center mx-[15.7px] md:mx-0">
              THE CODER WORLDS BIGGEST PROPAGANDA AND HOT TAKES
            </div>
          </div>
          
          <div className="hidden md:block">

          <Image src="/assets/logo2.png"  alt="logo"
            width={155}
            height={20}
            className=" p-2"/>
          </div>


        </div>

      </div>

      <div className="h-36 mx-8 flex items-center">
        <div className="w-full flex justify-end  ">
          <Image
            src="/assets/hallowin.png"
            alt="hallowin"
            width={310}
            height={120}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Hogwart1;
