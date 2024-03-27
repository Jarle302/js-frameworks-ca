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
  const defaultStyle = "text-zinc-200 font-bold hover:text-green-300 ";
  const [active, setActive] = useState(
    `${defaultStyle}  text-green-500 hover:text-green-500`
  );
  console.log(pathname, homePath, contactPath);
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
            className={pathname === homePath ? active : defaultStyle}
            href={homePath}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className={pathname === contactPath ? active : defaultStyle}
            href={contactPath}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
