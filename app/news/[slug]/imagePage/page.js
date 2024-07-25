import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = ({ params }) => {
  const imageSlug = params.slug;
  const Item = DUMMY_NEWS.find((item) => item.slug === imageSlug);

  if (!Item) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${Item.image}`} alt={Item.title} />
    </div>
  );
};

export default ImagePage;
