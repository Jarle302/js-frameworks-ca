"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const pathname = usePathname();
  const homePath = "/";
  const contactPath = "/contact";
  const breakPointWidth = 768;
  const [search, setSearch] = useState("");
  const [isHidden, setIsHidden] = useState(window.innerWidth > breakPointWidth);
  const defaultTextColor = "text-zinc-200";
  const defaultStyle = `${defaultTextColor} font-bold hover:text-green-300`;
  const activeStyle =
    defaultStyle
      .split(" ")
      .filter((arr) => arr !== defaultTextColor)
      .join(" ") + " text-green-500 hover:text-green-500";
  return (
    <nav className={"flex justify-between w-full"}>
      <Link href={"/"}>
        <Image
          width={646}
          height={202}
          className={"w-[100px] mx-2 "}
          src={"/logo.png"}
          alt={"logo with the text Silk and Sound, in golden color"}
        />
      </Link>
      {isHidden && (
        <div className="h-[100vh] md:h-[revert] top-[55px] right-0 z-50 bg-zinc-800 flex md:p-0 p-5 md:justify-between md:static position fixed md:flex-row flex-col">
          <search>
            <form>
              <input
                type="text"
                name="searchQuery"
                id="searchQuery"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </search>
          <ul className="flex flex-col md:flex-row gap-2">
            <li>
              {" "}
              <Link
                className={pathname === homePath ? activeStyle : defaultStyle}
                href={homePath}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={
                  pathname === contactPath ? activeStyle : defaultStyle
                }
                href={contactPath}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
      <button onClick={() => setIsHidden((prev) => !prev)}>
        {" "}
        <GiHamburgerMenu className={"md:hidden"} />
      </button>
    </nav>
  );
};

export { NavBar };
