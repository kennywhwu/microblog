// Component for listing BlogCards for individual blog post summaries

import React, { Component } from 'react';
import BlogCard from '../Components/BlogCard';

class BlogList extends Component {
  render() {
    let blogs = Object.values(this.props.blogs).map(blog => (
      <BlogCard blog={blog} key={blog.id} />
    ));

    return <div className="BlogList">{blogs}</div>;
  }
}

export default BlogList;
