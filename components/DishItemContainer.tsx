"use client";
import { StaticImageData } from "next/image";
import React, { useContext } from "react";
import Image from "next/image";
// import { FiShoppingCart } from "react-icons/fi";
import appContext from "@/store/appContext";
// import { useRouter } from "next/navigation";

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
  const { changeIsOrderModalVisible } = useContext(appContext);

  // const router = useRouter();

  // const addItemToCartHandler = () => {
  //   addItemToCart({
  //     name: name,
  //     description: description,
  //     price: price,
  //     image: image,
  //   });
  // };

  const orderNowHandler = () => {
    // addItemToCartHandler();
    // router.push("/your-order");
    changeIsOrderModalVisible(true);
  };

  return (
    <div className="flex w-full h-full flex-col border border-[#D1D1D1] bg-[#F4F3E8] rounded-[1rem] overflow-x-hidden shadow-lg">
      <div className="w-full h-[27rem]">
        <Image
          src={image}
          alt={`${name} image`}
          priority
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-[2rem] w-full font-switzer flex-1 shrink-0">
        <p className="text-primary-1 font-medium text-[1.8rem]">{name}</p>
        <p className="text-secondary-2 text-[1.2rem] leading-[2rem] mb-[0.5rem]">
          {description}
        </p>
        <p className="text-[2rem] text-primary-1 font-semibold mb-[3rem] mt-auto">
          ${price.toFixed(2)}
        </p>
        <div className="flex justify-between items-center w-full mt-auto">
          <button
            type="button"
            onClick={orderNowHandler}
            className="border-[0.2rem] border-primary-1 px-[1.5rem] py-[1rem] rounded-[0.5rem] text-primary-1 text-[1.36rem] font-medium capitalize cursor-pointer leading-[2rem]"
          >
            Order now
          </button>
          {/* <button
            type="button"
            className="cursor-pointer"
            onClick={addItemToCartHandler}
          >
            <FiShoppingCart className="w-[2.4rem] h-[2.4rem] text-primary-1" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DishItemContainer;
