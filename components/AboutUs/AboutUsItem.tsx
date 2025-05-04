import Image from "next/image";
import React from "react";
import aboutUsImg1 from "../../assets/about-us/about-us-1.png";
import aboutUsImg2 from "../../assets/about-us/about-us-2.png";
import aboutUsImg3 from "../../assets/about-us/about-us-3.png";

const AboutUsItem = ({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex items-center justify-between my-[5.8rem] relative z-50">
      <div
        className={`w-[45%] ${
          index % 2 === 0 ? "order-1" : "order-2"
        } font-switzer`}
      >
        <h4 className="text-primary-1 border-b-[0.4rem] border-primary-1 w-max pb-[1rem] text-[3.2rem] font-medium mb-[2.4rem]">
          {title}
        </h4>
        <p className="text-[#484848] leading-[250%]">{text}</p>
      </div>
      <div
        className={`flex w-[50%] justify-between items-center ${
          index % 2 === 0 ? "order-2" : "order-1"
        }`}
      >
        <div
          className={`w-[48%] rounded-[1.6rem] overflow-hidden ${
            index % 2 === 0 ? "order-2" : "order-1"
          }`}
        >
          <Image
            src={aboutUsImg1}
            alt="about us image 1"
            priority
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div
          className={`w-[48%] flex flex-col  justify-between ${
            index % 2 === 0 ? "order-1" : "order-2"
          }`}
        >
          <div className=" w-full mb-[2rem] rounded-[1.6rem] overflow-hidden">
            <Image
              src={aboutUsImg2}
              alt="about us image 2"
              priority
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className=" w-full rounded-[1.6rem] overflow-hidden">
            <Image
              src={aboutUsImg3}
              alt="about us image 3"
              priority
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsItem;
