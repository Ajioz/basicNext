import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsList = ({ news }) => {

  return (
    <ul className="news-list">
      {news.map(({ id, slug, title, image }) => (
        <li key={id}>
          <Link href={`/news/${slug}`}>
            <Image
              src={`/images/news/${image}`}
              title={title}
              width={500}
              height={500}
            />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
