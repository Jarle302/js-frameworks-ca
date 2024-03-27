"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
const NavBar = () => {
  const pathname = usePathname();
  const homePath = "/";
  const contactPath = "/contact";
  const [search, setSearch] = useState("");
  const defaultStyle = "text-zinc-200 font-bold";
  const activeStyle = `${defaultStyle} text-yellow-500 `;
  console.log(search);
  return (
    <nav className={"flex justify-between w-full"}>
      <Link href={"/"}>
        <Image
          width={646}
          height={202}
          className={"w-[100px] mx-2 "}
          src={"/logo.png"}
          alt={"logo with the text Silk and Sound in golden color"}
        />
      </Link>

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
            className={pathname === contactPath ? activeStyle : defaultStyle}
            href={contactPath}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
