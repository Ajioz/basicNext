import NewsList from "@/components/newsList/NewsList";
import { getAllNews } from "@/lib/news";

const NewsPage = async() => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;

/*
"use client";

import NewsList from "@/components/newsList/NewsList";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
        console.log(response);
      }

      const fetchedNews = await response.json();
      setIsLoading(false);
      setNews(fetchedNews);
    };

    fetchNews();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  let newsContent;
  if (news) newsContent = <NewsList news={news} />;

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
*/
