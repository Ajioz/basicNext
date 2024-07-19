import React from 'react'

const BlogPostPage = ({ params }) => {
  return (
    <main>
      <h1>Blog Post </h1>
      <p>{params.id}</p>
    </main>
  );
}

export default BlogPostPage;