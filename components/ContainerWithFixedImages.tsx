import React, { FC, ReactNode } from "react";
import Image from "next/image";
import flower1Img from "../assets/flower-1.png";
import flower2Img from "../assets/flower-2.png";
import FirstSection from "./FirstSection";

const ContainerWithFixedImages: FC<{
  children: ReactNode;
  title: string;
  text: string;
}> = ({ children, title, text }) => {
  return (
    <div className="relative">
      <div className="w-[13.6rem] absolute  left-0 z-10">
        <Image
          src={flower1Img}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="w-[21rem] absolute  -right-[7rem] -top-[1rem] z-10">
        <Image
          src={flower1Img}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="w-[13.6rem] absolute  -right-[9rem] bottom-0 z-10">
        <Image
          src={flower2Img}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center flex-col text-center w-full z-40 relative">
        <h3 className="text-[3.2rem] font-poppins font-medium capitalize text-primary-1">
          {title}
        </h3>
        <FirstSection containerClassName="leading-[2.4rem] text-[#181818] font-switzer w-[60%]">
          {text}
        </FirstSection>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ContainerWithFixedImages;
