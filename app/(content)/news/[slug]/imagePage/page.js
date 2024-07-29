import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = async ({ params }) => {
  const imageSlug = params.slug;
  const Item = await getNewsItem(imageSlug);

  if (!Item) notFound();
  // console.log(Item);

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${Item.image}`} alt={Item.title} />
    </div>
  );
};

export default ImagePage;
