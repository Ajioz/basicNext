import Link from "next/link";


const About = () => {
  return (
    <main>
      <Link href="/news/reels">News Reels</Link><br />
      <Link href="/news/sport">Sport News</Link><br />
      <Link href="/news/business">Business News</Link><br />
    </main>
  );
};

export default About;