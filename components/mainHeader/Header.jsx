import React from "react";
import style from "./header.module.css";
import HeaderBackground from "./headerBackground";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import NavLink from "./navLink";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header>
        {" "}
        <Link href="/" className={style.logo}>
          <Image src={logoImg} alt="logo" priority />
          News
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href='/news'>New Link</NavLink>
              {/* <NavLink href={`/${id}`}>{id}</NavLink> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
