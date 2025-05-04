import React from "react";
import Image from "next/image";
import logoImg from "../assets/logo.svg";
import { MediaLink, mediaLinks } from "@/data/mediaLinks";
import Link from "next/link";
import { MdCopyright } from "react-icons/md";
import { FooterLinkData, footerLinksData } from "@/data/footerLinkdata";

const Footer = () => {
  return (
    <footer className=" w-full  pb-[5rem]">
      <div className="px-[9rem] flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="w-[10rem]">
            <Image
              src={logoImg}
              alt="omalicha kitchen logo image"
              priority
              className="w-full h-full"
              width={200}
              height={200}
            />
          </div>
          <div className="flex items-center">
            {mediaLinks.map((link: MediaLink) => (
              <Link
                key={link.link}
                href={link.link}
                className="w-[2.8rem] h-[2.8rem] block mr-[1.2rem] last:mr-0"
                target="blank"
              >
                <Image
                  src={link.image}
                  alt={`${link.link} image`}
                  priority
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-[5rem] font-switzer">
          {footerLinksData.map((link: FooterLinkData) => (
            <div key={link.title}>
              <p className="font-medium leading-[1.8rem] tracking-[0.2rem] uppercase mb-[1rem]">
                {link.title}
              </p>
              {link.texts && (
                <div>
                  {link.texts.map((text: string) => (
                    <p
                      key={text}
                      className="text-[1.4rem] leading-[1.6rem] mb-[1rem] last:mb-0"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              )}
              {link.links && (
                <div className="flex flex-col">
                  {link.links.map((link: { link: string; text: string }) => (
                    <Link
                      href={link.link}
                      key={link.text}
                      className="text-[1.4rem] leading-[1.6rem] mb-[1rem] last:mb-0 block capitalize hover:text-primary-1 transition-all duration-150 ease-in"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-[2rem] border-t border-t-[#E7E7E7] px-[9rem] text-[1.4rem] font-switzer text-black leading-[1.6rem] mt-[2rem]">
        <div className="flex items-center">
          <MdCopyright className="mr-[0.5rem] text-black w-[2.4rem] h-[2.4rem]" />
          <p>2025 Omalicha Kitchen. All rights Reserved </p>
        </div>
        <p>Designed & Developed by Qrest Company</p>
      </div>
    </footer>
  );
};

export default Footer;
