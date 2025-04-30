import React from "react";

const TitleComp = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center font-poppins text-[2rem] capitalize text-primary-1 font-medium">
      <h2>{title}</h2>
      <div className="w-[5.2rem] h-[0.8rem] bg-primary-1 rounded-[1rem] mt-[1rem]"></div>
    </div>
  );
};

export default TitleComp;
