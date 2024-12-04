import React from "react";
import Image from "next/image";
import footerLogo from "../../public/logo.png";

export const Footer = () => {
  return (
    <div className="w-[1920px] h-[461px] px-[220px] pt-[140px] pb-8 bg-[#043873]">
      <div className="w-[1480px] h-[289px] gap-[100px]">
        <div className="w-[1480px] h-[169px] gap-[100px] flex">
          <div className="w-[295px] h-[169px] gap-[15px]">
            <Image
              src={footerLogo}
              alt="logo"
              className="w-[191px] h-[34px] mb-3"
            />
            <div className="w-[240px] h-[120px] text-[17px] font-normal leading-[30px] text-[#F7F7EE]">
              <p>
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
          </div>
          <div className="w-[295px] h-[127px] gap-[15px] text-[#fff]">
            <p className="w-[68px] h-[22px] font-bold text-[18px] leading-[22px] mb-3">
              Product
            </p>
            <p className="w-[70px] h-[20px] text-[16px] leading-5 text-[#FFE492] mb-3">
              Overview
            </p>
            <p className="w-[50px] h-[20px] text-[16px] leading-[20px] mb-3">
              Pricing
            </p>
            <p className="w-[177px] h-[20px] text-[16px] leading-[21px]">
              Customer Stories
            </p>
          </div>
          <div className="w-[295px] h-[130px] gap-[16px] text-[#fff]">
          <p className="w-[91px] h-[22px] font-bold text-[18px] leading-[22px] mb-3">
              Resources
            </p>
            <p className="w-[33px] h-[20px] text-[16px] leading-5 mb-3">
              Blog
            </p>
            <p className="w-[137px] h-[20px] text-[16px] leading-[20px] mb-3">
              Guides & Tutorials
            </p>
            <p className="w-[134px] h-[20px] text-[16px] leading-[21px]">
              Help Center
            </p>
          </div>
        <div className="w-[295px] h-[130px] gap-[15px] text-[#fff]">
            <p className="w-[83px] h-[22px] font-bold text-[18px] leading-[22px] mb-3">
              Company
            </p>
            <p className="w-[68px] h-[20px] text-[16px] leading-5 mb-3">
              About us
            </p>
            <p className="w-[62px] h-[20px] text-[16px] leading-[20px] mb-3">
              Careers
            </p>
            <p className="w-[99px] h-[20px] text-[16px] leading-[21px]">
              Media Kit
            </p>
          </div>
        </div>
        <hr className="mt-14 border-t border-t-[#2E4E73]"/>
        <button className="w-[1480px] h-4 p-8">
          <div>
            <p className="text-base leading-5 text-[#fff]">
              &#xa9; 2021 Whitepace LLC
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
