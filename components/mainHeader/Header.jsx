import Link from "next/link";

// import NavLink from "./navLink";
// import React from "react";
// import style from "./header.module.css";
// import HeaderBackground from "./headerBackground";
// import logoImg from "@/assets/logo.png";
// import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* <HeaderBackground /> */}
      <header id="main-header">
        <div id="logo">
          <Link href="/">Home</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/news">News</Link>
              <Link href="/archive">Archive</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
