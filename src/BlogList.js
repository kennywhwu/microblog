import React, { Component } from 'react';
import BlogCard from './BlogCard';

class BlogList extends Component {
  render() {
    return (
      <div className="BlogList">
        <p>Welcome to Microblog!</p>
        {BLOGLIST_ARRAY.map(blog => (
          <BlogCard blog={blog} />
        ))}
      </div>
    );
  }
}

export default BlogList;
