import React from 'react'

const NewsDetails = ({params}) => {
  return (
    <article>
      <h1>News Detail Page </h1>
      <main>
        <p>{params.id}</p>
      </main>
    </article>
  );
}

export default NewsDetails;