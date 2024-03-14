"use client";
import Link from "next/link";
import React, { useState } from "react";
const NavBar = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <nav className={"flex"}>
      <Link href={"/"}>
        <img className={"w-[100px] mx-2 "} src={"/logo.png"} />
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
    </nav>
  );
};

export { NavBar };
