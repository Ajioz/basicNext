import Link from "next/link";


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
