import React from "react";
import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";
import Image from "next/image";

const FilteredNewsPage = ({ params }) => {
    const year = params.year;
    const Item = getAllNews().find(news => news.year === year);

    if (!Item) notFound();
    
    return (
     <article className="news-article">
      <header>
        <Image
          src={`/images/news/${Item.image}`}
          title={Item.title}
          width={500}
          height={500}
        />
        <h1>{Item.title} </h1>
        <time dateTime={Item.date}>{Item.date}</time>
      </header>
      <p>{Item.content}</p>
    </article>
  );
};

export default FilteredNewsPage;
