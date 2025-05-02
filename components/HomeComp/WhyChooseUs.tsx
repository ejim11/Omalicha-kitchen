import React from "react";
import TitleComp from "../TitleComp";
import { whyChooseUsData } from "@/data/whyChooseUs";
import { WhyChooseUsType } from "@/types/whyChooseUs";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="mt-[8rem]">
      <TitleComp title="Why People Choose  Us" />
      <div className="grid grid-cols-4 gap-[3rem] mt-[5rem]">
        {whyChooseUsData.map((data: WhyChooseUsType) => (
          <div
            key={data.title}
            className="flex items-center flex-col text-center font-switzer"
          >
            <div className="w-[5.2rem] h-[5.2rem]">
              <Image
                src={data.image}
                alt={`${data.title} image`}
                priority
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
            <p className="my-[1.6rem] font-semibold text-primary-1 text-[1.7rem]">
              {data.title}
            </p>
            <p className="font-medium text-[1.2rem] text-[#82A284]">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
