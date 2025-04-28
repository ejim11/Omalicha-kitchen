import React from "react";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { NavLink } from "@/types/navLink";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const navLinks: NavLink[] = [
    {
      title: "Our Menu",
      link: "/menu",
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

  return (
    <header className="h-[10rem] flex items-center px-[9rem]   w-full  bg-[rgba(255,255,255,0.66)] justify-between relative z-[50]">
      <div className="">
        <Image
          src={logoImg}
          alt="omalicha kitchen logo image"
          priority
          className="w-full h-full"
          width={200}
          height={200}
        />
      </div>
      <nav className="flex-1">
        <ul className="flex items-center justify-evenly  w-full">
          {navLinks.map((link: NavLink) => (
            <li key={link.title} className="font-switzer text-black">
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="w-[14.6rem] border rounded-[2.6rem] border-primary-1 flex items-center pl-[1rem]">
          <GoSearch className="w-[1.8rem] h-[1.8rem] text-primary-1" />
          <div className="flex-1">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full  p-[1rem] placeholder:text-[1.2rem] placeholder:text-[rgba(0,0,0,0.33)] placeholder:font-switzer ring-0 outline-hidden focus:ring-0 focus:outline-hidden"
              placeholder="Search here"
            />
          </div>
        </div>
        <button type="button" className="mx-[5rem]">
          <FiShoppingCart className="w-[2.4rem] h-[2.4rem] text-black" />
        </button>
        <Link href={"/book-table"} className="font-switzer text-[1.8rem]">
          Order Online/Reservation
        </Link>
      </div>
    </header>
  );
};

export default Header;
