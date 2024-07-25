import React from "react";
import { getNewsForYear } from "@/lib/news";
import { notFound } from "next/navigation";
import NewsList from "@/components/newsList/NewsList";

const FilteredNewsPage = ({ params }) => {
  const year = params.year;
  const Item = getNewsForYear(year);

  if (!Item) notFound();

  return <NewsList news={Item} />;
};

export default FilteredNewsPage;
