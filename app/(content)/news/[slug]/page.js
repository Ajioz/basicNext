import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = async({ params }) => {
  const newSlug = params.slug;
  const Item = await getNewsItem(newSlug);

  if (!Item) notFound();

  // console.log(Item)
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${Item.slug}/imagePage`}>
          <Image
            src={`/images/news/${Item.image}`}
            title={Item.title}
            width={100}
            height={100}
          />
        </Link>
        <h1>{Item.title} </h1>
        <time dateTime={Item.date}>{Item.date}</time>
      </header>
      <p>{Item.content}</p>
    </article>
  );
};

export default NewsDetails;
