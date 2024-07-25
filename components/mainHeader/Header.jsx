import Link from "next/link";
import NavLink from "./navLink";

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
              <NavLink href="/news"> News </NavLink>
              <NavLink href="/archive"> Archive </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
