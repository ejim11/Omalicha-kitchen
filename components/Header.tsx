"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { NavLink } from "@/types/navLink";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import appContext from "@/store/appContext";

const Header = () => {
  const pathname = usePathname();

  const router = useRouter();

  const { cartItems, isHeaderSticky } = useContext(appContext);

  const [scaleUp, setScaleUp] = useState<boolean>(false);

  const [searchText, setSearchText] = useState<string>("");

  const navLinks: NavLink[] = [
    {
      title: "Our Menu",
      link: "/menu?filter=traditional-soups",
    },
    {
      title: "Book a Table",
      link: "/book-table",
    },
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
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setScaleUp(true);
    const timer = setTimeout(() => {
      setScaleUp(false);
    }, 200);

    return () => {
      clearTimeout(timer);
      setScaleUp(false);
    };
  }, [cartItems]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;

    if (searchText) {
      timer = setTimeout(() => {
        const search = searchText.slice().toLowerCase().split(" ").join("-");
        router.replace(`/menu?filter=all&dish=${search}`);
      }, 1000);
    } else {
      router.replace(`/menu?filter=all&dish=${""}`);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [router, searchText]);

  return (
    <header
      className={`h-[10rem] flex items-center px-[9rem]   w-full   justify-between z-[100]  ${
        isHeaderSticky
          ? `fixed top-0  bg-white  showHeader`
          : "relative bg-[rgba(255,255,255,0.66)] "
      }`}
    >
      <Link href={"/"} className="w-[10rem]">
        <Image
          src={logoImg}
          alt="omalicha kitchen logo image"
          priority
          className="w-full h-full"
          width={200}
          height={200}
        />
      </Link>
      <nav className="flex-1">
        <ul className="flex items-center justify-evenly  w-full">
          {navLinks.map((link: NavLink) => (
            <li key={link.title} className="font-switzer  text-[1.8rem]">
              <Link
                href={link.link}
                className={`${
                  pathname.includes(link.link) ? "text-primary-1" : "text-black"
                }  hover:text-primary-1 transition-all duration-150 ease-in`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="w-[14.6rem] border rounded-[2.6rem] border-primary-1 flex items-center pl-[1rem]">
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
        <Link href={"/your-order"} className="mx-[5rem] block relative">
          <FiShoppingCart className="w-[2.4rem] h-[2.4rem] text-black" />
          <span
            className={`${cartItems.length > 0 ? "flex " : "hidden"} ${
              scaleUp ? "scale-125" : "scale-100"
            } text-white -top-[1rem] -right-[0.8rem] bg-red-600 w-[2rem] h-[2rem] text-[1.2rem] rounded-full absolute items-center justify-center transition-all ease-in duration-200`}
          >
            {cartItems.length}
          </span>
        </Link>
        <Link href={"/book-table"} className="font-switzer text-[1.8rem]">
          Order Online/Reservation
        </Link>
      </div>
    </header>
  );
};

export default Header;
