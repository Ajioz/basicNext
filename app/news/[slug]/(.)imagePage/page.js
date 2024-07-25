import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const imageSlug = params.slug;
  const Item = DUMMY_NEWS.find((item) => item.slug === imageSlug);

  if (!Item) notFound();

  return (
    <>
      <h2>Intercepted</h2>
      <div className="fullscreen-image">
        <Image
          src={`/images/news/${Item.image}`}
          title={Item.title}
          height={800}
          width={1000}
        />
      </div>
    </>
  );
};

export default InterceptedImagePage;
