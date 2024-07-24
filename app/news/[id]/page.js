import React from 'react'

const NewsDetails = ({params}) => {
  return (
    <div>
      <h1>Blog Post </h1>
      <main>{params.id}</main>
    </div>
  );
}

export default NewsDetails;