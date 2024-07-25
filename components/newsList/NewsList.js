import React from 'react';
import Image from 'next/image';

const NewsList = ({Item}) => {
  return (
    <article className="news-article">
      <header>
        <Image
          src={`/images/news/${Item.image}`}
          title={Item.title}
          width={100}
          height={100}
        />
        <h1>{Item.title} </h1>
        <time dateTime={Item.date}>{Item.date}</time>
      </header>
      <p>{Item.content}</p>
    </article>
  );
}

export default NewsList;