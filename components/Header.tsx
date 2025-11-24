"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { NavLink } from "@/types/navLink";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
// import { FiShoppingCart } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import appContext from "@/store/appContext";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();

  const router = useRouter();

  const { isHeaderSticky, changeIsOrderModalVisible } = useContext(appContext);

  // const [scaleUp, setScaleUp] = useState<boolean>(false);

  const [searchText, setSearchText] = useState<string>("");

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    {
      title: "Our Menu",
      link: "/menu",
    },
    // {
    //   title: "Book a Table",
    //   link: "/book-table",
    // },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const searchTextInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSearchText(e.target.value);
      router.replace(`/menu?filter=all&dish=${""}`);
      return;
    }
    setSearchText(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeMenuModalHandler = (e: any) => {
    if (e.target.dataset.close) {
      setMenuIsVisible(false);
      return;
    }
  };

  const openOrderModalHandler = () => {
    changeIsOrderModalVisible(true);
  };

  // useEffect(() => {
  //   setScaleUp(true);
  //   const timer = setTimeout(() => {
  //     setScaleUp(false);
  //   }, 200);

  //   return () => {
  //     clearTimeout(timer);
  //     setScaleUp(false);
  //   };
  // }, [cartItems]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;

    if (searchText) {
      timer = setTimeout(() => {
        const search = searchText.slice().toLowerCase().split(" ").join("-");
        router.replace(`/menu?filter=all&dish=${search}`);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [router, searchText]);

  return (
    <header
      className={`h-[10rem] flex items-center px-[9rem] max-2xl:px-[5rem] max-xl:px-[3rem] max-sm:px-[2rem]   w-full   justify-between z-[100]  ${
        isHeaderSticky
          ? `fixed top-0  bg-white  showHeader`
          : "relative bg-[rgba(255,255,255,0.66)] "
      }`}
    >
      <Link href={"/"} className="w-[10rem] block h-full shrink-0">
        <Image
          src={logoImg}
          alt="omalicha kitchen logo image"
          priority
          className="w-full h-full"
          width={200}
          height={200}
        />
      </Link>
      <nav
        className={`flex-1 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:bottom-0 max-lg:w-full max-lg:h-screen max-lg:bg-[rgba(0,0,0,0.4)] max-lg:z-[120] ${
          menuIsVisible
            ? "max-lg:opacity-100 max-lg:-translate-x-0"
            : "max-lg:opacity-0 max-lg:-translate-x-[100%]"
        } max-lg:transition-all max-lg:duration-150 max-lg:ease-in`}
        onClick={closeMenuModalHandler}
        data-close="close"
      >
        <ul className="flex items-center justify-evenly max-lg:justify-start  w-full max-lg:flex-col max-lg:items-start max-lg:bg-[#3C3C3C] max-lg:w-[50%] max-smd:w-[60%] max-ssm:w-full max-lg:h-full max-lg:p-[2rem]">
          <button
            type="button"
            className="hidden max-ssm:block self-end mb-[2rem] "
            onClick={() => {
              setMenuIsVisible(false);
            }}
          >
            <IoMdClose className="w-[3.2rem] h-[3.2rem] text-white" />
          </button>
          {navLinks.map((link: NavLink) => (
            <li
              key={link.title}
              className="font-switzer  text-[1.8rem] max-lg:w-full "
              data-close="close"
            >
              <Link
                href={
                  link.link.includes("/menu")
                    ? `${link.link}?filter=traditional-soups`
                    : link.link
                }
                data-close="close"
                className={`${
                  pathname.includes(link.link)
                    ? "text-primary-1 max-lg:text-secondary-1 max-lg:border-b-secondary-1"
                    : "text-black max-lg:text-white"
                }  hover:text-primary-1 max-lg:hover:text-secondary-1 transition-all duration-150 ease-in max-lg:border-b max-lg:py-[1.5rem] max-lg:block max-lg:w-full`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center max-lg:flex-1 max-lg:ml-[2rem] ">
        <div className="w-[14.6rem] max-lg:flex-1 max-xmd:w-[35rem] max-smd:w-full border rounded-[2.6rem] border-primary-1 flex items-center pl-[1rem]">
          <GoSearch className="w-[1.8rem] h-[1.8rem] text-primary-1" />
          <div className="flex-1 overflow-hidden">
            <input
              type="text"
              name="search"
              id="search"
              value={searchText}
              onChange={searchTextInputChangeHandler}
              className="w-full  p-[1rem] placeholder:text-[1.2rem] placeholder:text-[rgba(0,0,0,0.33)] placeholder:font-switzer ring-0 outline-hidden focus:ring-0 focus:outline-hidden focus:bg-transparent"
              placeholder="Search here"
            />
          </div>
        </div>
        {/* <Link
          href={"/your-order"}
          className="mx-[5rem] block relative max-lg:mx-[2rem] max-sm:mx-[1rem] "
        >
          <FiShoppingCart className="w-[2.4rem] h-[2.4rem] text-black" />
          <span
            className={`${cartItems.length > 0 ? "flex " : "hidden"} ${
              scaleUp ? "scale-125" : "scale-100"
            } text-white -top-[1rem] -right-[0.8rem] bg-red-600 w-[2rem] h-[2rem] text-[1.2rem] rounded-full absolute items-center justify-center transition-all ease-in duration-200`}
          >
            {cartItems.length}
          </span>
        </Link> */}
        <button
          onClick={openOrderModalHandler}
          className="font-switzer text-[1.8rem] max-lg:hidden ml-[5rem] border px-[1.5rem] py-[0.8rem] rounded-[1.6rem] bg-primary-1 text-white border-primary-1 cursor-pointer"
        >
          Order Online
        </button>
        <button
          type="button"
          onClick={() => {
            setMenuIsVisible(true);
          }}
          className=" text-black hidden max-lg:block max-lg:ml-[2rem]"
        >
          <TfiMenuAlt className="text-current w-[3rem] h-[3rem]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
