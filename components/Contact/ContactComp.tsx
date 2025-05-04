import React from "react";
import MainContainer from "../MainContainer";
import ContainerWithFixedImages from "../ContainerWithFixedImages";
import Link from "next/link";
import Image from "next/image";
import mapImg from "../../assets/contact/map.png";
import ContactUsForm from "./ContactForm";

const ContactComp = () => {
  const mediaLinks: {
    name: string;
    link: string;
  }[] = [
    {
      name: "Instagram",
      link: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      link: "https://www.x.com",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com",
    },
  ];

  return (
    <MainContainer>
      <ContainerWithFixedImages
        title="Contact Us"
        text="Any  question or remark ? Just write us a message"
      >
        <div className="my-[4rem] w-full flex flex-col font-switzer">
          <div className="w-full flex justify-between ">
            <div className="w-[45%] flex flex-col justify-between">
              <div>
                <h3 className="text-[3.2rem] font-switzer font-medium text-[#484848] pb-[1rem] border-b-[0.4rem] w-max border-b-primary-1">
                  Let Talk
                </h3>
                <p className="mt-[2.4rem] font-switzer">
                  Have some big idea or brand to develop and need help? Then
                  reach out we&apos;d love to hear about your project and
                  provide help
                </p>
              </div>
              <div className="font-switzer">
                <p className="text-[3.2rem] text-black">Email</p>
                <p className="text-[#484848]">beebs@gmail.com</p>
              </div>
              <div className="font-switzer">
                <p className="text-[3.2rem] text-black">Socials</p>
                <div className="flex flex-col w-max">
                  {mediaLinks.map((link: { name: string; link: string }) => (
                    <Link
                      key={link.name}
                      href={link.link}
                      target="blank"
                      className="underline capitalize text-[#484848] mb-[2.4rem] last:mb-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[45%] relative z-50">
              <ContactUsForm />
            </div>
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
            Monday -Sunday :11am to 10pm
          </p>
          <p className="text-[#484848]">Sunday Closed</p>
        </div>
      </ContainerWithFixedImages>
    </MainContainer>
  );
};

export default ContactComp;
