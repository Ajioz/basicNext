import React from "react";
import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";
import NewsList from "@/components/newsList/NewsList";

const FilteredNewsPage = ({ params }) => {
  const year = params.year;
  const NewsReels = getAllNews();
  const Item = NewsReels.filter((news) => news.date.split("-")[0] === year);

  if (!Item) notFound();

  return <NewsList Item={Item} />;
};

export default FilteredNewsPage;
