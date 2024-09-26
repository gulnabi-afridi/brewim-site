import React from "react";
import styles from "../components/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full min-h-screen md:pb-0 pb-6 xl:px-0 px-4 flex flex-col justify-center items-center">
      <div
        className={`w-full max-w-[1100px] gap-5 sm:gap-8 flex flex-col justify-center items-center ${styles.footer}`}
      >
        {/* top section */}
        <div className="w-full flex justify-between items-center gap-8">
          <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] font-semibold text-black uppercase">
            {" "}
            {`{ Buy`}
            <br />
            {`$bwen }`}
          </h1>
          {/*  */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="w-full gap-2 md:gap-3 justify-center items-center col-span-3 grid grid-cols-2">
              <div className="w-full flex justify-end items-center">
                <a href="#" className="w-[40px] hover:scale-105 transition-all duration-300 sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                  <Image src="/home/icon.svg" alt="" fill />
                </a>
              </div>
              <div className="w-full flex justify-start items-center">
                <a href="#" className="w-[40px] hover:scale-105 transition-all duration-300 sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                  <Image src="/home/icon.svg" alt="" fill />
                </a>
              </div>
            </div>
            <a href="#" className="w-[40px] hover:scale-105 transition-all duration-300 sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
              <Image src="/home/icon.svg" alt="" fill />
            </a>
            <a href="#" className="w-[40px] hover:scale-105 transition-all duration-300 sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
              <Image src="/home/icon.svg" alt="" fill />
            </a>
            <a href="#" className="w-[40px] hover:scale-105 transition-all duration-300 sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
              <Image src="/home/icon.svg" alt="" fill />
            </a>
          </div>
          {/*  */}
          <div className="w-[110px] sm:w-[170px] md:w-[250px] lg:w-[300px] h-[110px] sm:h-[170px] md:h-[250px] lg:h-[300px] relative">
            <Image src="/home/billy.gif" fill alt="" />
          </div>
        </div>

 
      </div>
      <p className="text-[16px] mt-5 sm:mt-6 md:mt-8 w-full md:px-4 px-[0px] text-center font-normal text-black/70 break-words">
    xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxxoxoxoxoxoxoxoxoxoxoxox<span className="text-[#1f97dd]">total_supply=100_000_000</span>oxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxo<span className="text-[#1f97dd]">chain=sol</span>xoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxo<span className="text-[#1f97dd]">liquidity=burned</span>xoxoxoxoxoxoxoxoxoxoxoxox<span className="text-[#1f97dd]">dev=out</span>oxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxox
</p>
    </div>
  );
};

export default Footer;
