import Link from "next/link";

const About = () => {
  return (
    <>
      <ul className="news-list">
        <li>
          <Link href="/news/reels">News Reels</Link>
          <br />
        </li>
        <li>
          <Link href="/news/sport">Sport News</Link>
          <br />
        </li>
        <li>
          <Link href="/news/business">Business News</Link>
          <br />
        </li>
      </ul>
    </>
  );
};

export default About;
