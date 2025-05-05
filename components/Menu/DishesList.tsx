import React, { useRef, useState } from "react";
import DishItemContainer from "../DishItemContainer";
import { DishItem } from "@/types/dishItem";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import {} from "react-icons/io5";
import ReactPaginate from "react-paginate";

const DishesList = ({
  dishItems,
  filter,
}: {
  dishItems: DishItem[];
  filter?: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionRef: any = useRef(null);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = filter === "all" || !filter ? 12 : 8;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = [...dishItems].slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dishItems.length / itemsPerPage);

  // Invoke when user click to request another page.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % dishItems.length;
    setItemOffset(newOffset);
  };

  const paginateNavStyle =
    "block  bg-[#F4F3E8]  py-[0.8rem] px-[1.4rem] rounded-[0.8rem]  border border-[rgba(0,0,0,0.1)] text-black hover:bg-color-[rgba(0,0,0,0.1)] transition-all tableData-200 ease-in capitalize  cursor-pointer";

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="w-full flex flex-col" ref={sectionRef}>
      <div className="grid grid-cols-4 gap-[3rem] mt-[4rem] max-xlg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-[2rem] max-ssm:grid-cols-1">
        {currentItems.map((dish: DishItem) => (
          <div
            key={dish.name + `-${Math.random() * 2000}`}
            className="w-full h-full block shrink-0"
          >
            <DishItemContainer
              image={dish.image}
              name={dish.name}
              description={dish.description}
              price={dish.price}
            />
          </div>
        ))}
      </div>
      <div className="flex mt-[4rem] w-full    ">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <p className="flex items-center  ">
              <span>next</span>
              <IoArrowForwardOutline className="text-color-current ml-[0.5rem] w-[2.2rem] h-[2.2rem]" />
            </p>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={
            <p className="flex items-center font-switzer font-medium text-[1.4rem] ">
              <IoArrowBackOutline className="text-black mr-[0.5rem] w-[2rem] h-[2rem]" />
              <span>previous</span>
            </p>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex items-center  w-full"
          previousClassName="mr-auto"
          nextClassName="ml-auto"
          previousLinkClassName={paginateNavStyle}
          nextLinkClassName={paginateNavStyle}
          pageLinkClassName="paginate-page-link"
          activeLinkClassName="paginate-active-page-link"
          onClick={() => {
            scrollToSection();
          }}
        />
      </div>
    </div>
  );
};

export default DishesList;
