import React from "react";
import ContainerWithFixedImages from "../ContainerWithFixedImages";
import MainContainer from "../MainContainer";
import Testimonial from "../HomeComp/Testimonial";
import { AboutUsData, aboutUsData } from "@/data/aboutUsData";
import AboutUsItem from "./AboutUsItem";

const AboutUsComp = () => {
  return (
    <MainContainer>
      <ContainerWithFixedImages
        title="About Us"
        text="Welcome to Omalicha Kitchen, your go-to destination for delicious, home-cooked meals prepared with love, passion, and the highest hygiene standards. We take pride in serving fresh, flavorful, and nutritious dishes in a clean and well-maintained environment."
      >
        <div className="w-full flex flex-col ">
          <div className="flex flex-col">
            {aboutUsData.map((data: AboutUsData, i: number) => (
              <AboutUsItem
                key={data.title}
                index={i}
                title={data.title}
                text={data.text}
              />
            ))}
          </div>
          <div className="w-full flex flex-col items-center text-center mt-[3rem] font-switzer">
            <h3 className="font-medium text-[3.2rem] max-sm:text-[2.3rem] text-primary-1">
              Order now
            </h3>
            <p className="text-[1.4rem] text-black">
              Order Now and join our family of satisfied customers who enjoy
              tasty and flavorful African dishes
            </p>
          </div>
        </div>
      </ContainerWithFixedImages>
      <div className="w-full pb-[4rem]">
        <Testimonial />
      </div>
    </MainContainer>
  );
};

export default AboutUsComp;
