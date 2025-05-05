"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleComp from "../TitleComp";
import flowerImg3 from "../../assets/home/flower-3.png";
import flowerImg4 from "../../assets/home/flower-4.png";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { FaStar } from "react-icons/fa6";
import { SlStar } from "react-icons/sl";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
    <section className="mt-[8rem] relative  ">
      <div className="w-[60rem] max-smd:w-[40rem] absolute  -left-[15rem] -top-[10rem]">
        <Image
          src={flowerImg3}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="w-[55rem] max-smd:w-[35rem] absolute -bottom-[1rem] -right-[16rem]">
        <Image
          src={flowerImg4}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <TitleComp title={"testimonial"} />
      <div className="w-[50%] max-2xl:w-[55%] max-xl:w-[60%] max-xlg:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-smd:w-full mx-auto my-[6rem] ">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.customerName}
              className="px-[2rem] max-sm:px-[1rem]"
            >
              <div className="flex flex-col items-center w-full ">
                <div className="w-[10rem] h-[10rem] z-30">
                  <Image
                    src={testimonial.customerImage}
                    alt={`${testimonial.customerName} image`}
                    priority
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
                <div className=" font-inter h-[40rem] bg-white w-full -mt-[5rem] z-20 rounded-tl-[10rem] rounded-tr-[3rem] rounded-br-[10rem] rounded-bl-[3rem] shadow-lg flex items-center justify-center px-[8rem] max-smd:px-[4rem] max-sm:px-[2rem] max-sm:py-[4rem] text-center flex-col">
                  <div className="flex  mb-[2rem] items-center">
                    {Array.from({ length: testimonial.stars }, (_, i) => i).map(
                      (star: number) => (
                        <div key={star}>
                          <FaStar className="text-[#EDDD11] w-[3.2rem] h-[3.2rem] mr-[0.8rem]" />
                        </div>
                      )
                    )}
                    {Array.from(
                      { length: 5 - testimonial.stars },
                      (_, i) => i
                    ).map((star: number) => (
                      <div key={star}>
                        <SlStar className="text-[#EDDD11] w-[3.2rem] h-[3.2rem] mr-[0.8rem] " />
                      </div>
                    ))}
                  </div>
                  <p className=" leading-[2.9rem] text-[#5C6574]">
                    {testimonial.text}
                  </p>
                  <p className="font-bold text-[#101A24] leading-[2.9rem] mt-[1.6rem]">
                    {testimonial.customerName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
