import React, { Suspense } from "react";
import NewsList from "@/components/newsList/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

const numToMonth = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const FilteredNews = async ({ year, month }) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>Make a valid selection period to see news feed.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
};

const FilteredNewsPage = async ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  const availableYear = await getAvailableNewsYears();
  let links = availableYear;

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) links = [];

  const availableMonth = getAvailableNewsMonths(selectedYear);

  if (
    (selectedYear && !availableYear.includes(selectedYear)) ||
    (selectedMonth && !availableMonth.includes(selectedMonth))
  ) {
    throw new Error("Invalid filter!");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>
                    {!selectedYear ? link : numToMonth[link]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Suspense>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
