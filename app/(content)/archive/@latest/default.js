import NewsList from "@/components/newsList/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestNewsPage = async() => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNewsPage;
