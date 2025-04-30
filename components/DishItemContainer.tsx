import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const DishItemContainer = ({
  image,
  name,
  description,
  price,
}: {
  image: StaticImageData;
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col border border-[#D1D1D1] rounded-[1rem] overflow-hidden shadow-lg">
      <div>
        <Image
          src={image}
          alt={`${name} image`}
          priority
          width={500}
          height={500}
          className="w-full h-full "
        />
      </div>
      <div className="flex flex-col p-[2rem] w-full font-switzer">
        <p className="text-primary-1 font-medium text-[1.8rem]">{name}</p>
        <p className="text-secondary-2 text-[1.38rem] leading-[2rem] mb-[0.5rem]">
          {description}
        </p>
        <p className="text-[2rem] text-primary-1 font-semibold">
          ${price.toFixed(2)}
        </p>
        <div className="flex justify-between items-center w-full mt-[3rem]">
          <button
            type="button"
            className="border-[0.2rem] border-primary-1 px-[1.5rem] py-[1rem] rounded-[0.5rem] text-primary-1 text-[1.36rem] font-medium capitalize cursor-pointer leading-[2rem]"
          >
            Order now
          </button>
          <button type="button" className="cursor-pointer">
            <FiShoppingCart className="w-[2.4rem] h-[2.4rem] text-primary-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishItemContainer;
