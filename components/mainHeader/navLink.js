"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navlink.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${style.link} ${style.active}` : style.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
