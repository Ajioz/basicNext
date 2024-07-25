import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = ({ params }) => {
  const newSlug = params.slug;
  const Item = DUMMY_NEWS.find(
    (item) => item.slug === newSlug
  );

  if (!Item) notFound();
  return (
    <article className="news-article">
      <header>
        <Image
          src={`/images/news/${Item.image}`}
          title={Item.title}
          width={100}
          height={100}
        />
        <h1>{Item.title} </h1>
        <time dateTime={Item.date}>{Item.date}</time>
      </header>
      <p>{Item.content}</p>
    </article>
  );
};

export default NewsDetails;