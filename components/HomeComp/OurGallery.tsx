import React from "react";
import galleryImg1 from "../../assets/home/gallery-1.png";
import galleryImg2 from "../../assets/home/gallery-2.png";
import galleryImg3 from "../../assets/home/gallery-3.png";
import Image from "next/image";

const OurGallery = () => {
  return (
    <section className="mt-[8rem]">
      <h3 className="text-[2.4rem] text-primary-1 font-medium capitalize">
        our gallery
      </h3>
      <div className="justify-between mt-[2rem] flex">
        <div className="w-[48%] ">
          <Image
            src={galleryImg1}
            alt="gallery image 1"
            priority
            width={1000}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="w-[48%] flex flex-col justify-between ">
          <div className=" h-[48%]">
            <Image
              src={galleryImg2}
              alt="gallery image 1"
              priority
              width={1000}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="h-[48%]">
            <Image
              src={galleryImg3}
              alt="gallery image 1"
              priority
              width={1000}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
