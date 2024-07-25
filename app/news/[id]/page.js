import React from 'react'

const NewsDetails = ({params}) => {
  return (
    <div>
      <h1>News Detail Page </h1>
      <main>
        <p>News ID:{params.id}</p>
      </main>
    </div>
  );
}

export default NewsDetails;