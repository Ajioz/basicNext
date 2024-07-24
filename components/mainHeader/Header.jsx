import React from "react";
import style from "./header.module.css";
import HeaderBackground from "./headerBackground";

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header>
        {" "}
        <Link href="/" className={style.logo}>
          <Image src={logoImg} alt="logo" priority />
          News App
        </Link>
        <nav className={style.nav}>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
