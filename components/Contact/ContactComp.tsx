import React from "react";
import MainContainer from "../MainContainer";
import ContainerWithFixedImages from "../ContainerWithFixedImages";
import Image from "next/image";
import mapImg from "../../assets/contact/map.png";
import ContactUsForm from "./ContactForm";

const ContactComp = () => {
  return (
    <MainContainer>
      <ContainerWithFixedImages
        title="Contact Us"
        text="Any  question or remark ? Just write us a message"
      >
        <div className="my-[4rem] w-full flex flex-col font-switzer">
          <div className="w-[60%] max-xlg:w-[80%] max-md:w-[90%] max-smd:w-full mx-auto flex  ">
            <ContactUsForm />
          </div>
          <div className="w-full relative z-50 bg-[#F4F3E8] mt-[3.6rem]">
            <Image
              src={mapImg}
              alt="map location image"
              priority
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <p className="mt-[2rem] leading-[250%] text-[#484848]">
            Monday - Saturday :11am to 10pm
          </p>
          <p className="text-[#484848]">Sunday Closed</p>
        </div>
      </ContainerWithFixedImages>
    </MainContainer>
  );
};

export default ContactComp;
