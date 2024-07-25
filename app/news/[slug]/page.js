import NewsList from "@/components/newsList/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = ({ params }) => {
  const newSlug = params.slug;
  const Item = DUMMY_NEWS.find(
    (item) => item.slug === newSlug
  );

  if (!Item) notFound();
  return (
    <NewsList Item={Item} />
  );
};

export default NewsDetails;
