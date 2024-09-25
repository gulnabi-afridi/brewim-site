import React from "react";
import styles from "../components/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full xl:px-0 px-4 flex justify-center items-center">
      <div
        className={`w-full max-w-[1100px] gap-5 sm:gap-8 min-h-screen flex flex-col justify-center items-center ${styles.footer}`}
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
                  <div className="w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                    <Image src="/home/icon.svg" alt="" fill />
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                    <Image src="/home/icon.svg" alt="" fill />
                  </div>
                </div>
              </div>
              <div className="w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                <Image src="/home/icon.svg" alt="" fill />
              </div>
              <div className="w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                <Image src="/home/icon.svg" alt="" fill />
              </div>
              <div className= "w-[40px] sm:w-[50px] md:w-[70px] lg:w-[80px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] relative">
                <Image src="/home/icon.svg" alt="" fill />
              </div>
            </div>
            {/*  */}
            <div className= "w-[110px] sm:w-[170px] md:w-[250px] lg:w-[300px] h-[110px] sm:h-[170px] md:h-[250px] lg:h-[300px] relative">
              <Image src="/home/billy.gif" fill alt="" />
            </div>
          </div>
          <p className="text-[14px] font-normal text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
      </div>
    </div>
  );
};

export default Footer;
