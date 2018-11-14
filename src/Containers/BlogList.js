import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogCard from '../Components/BlogCard';

class BlogList extends Component {
  render() {
    let blogs = Object.values(this.props.blogs).map(blog => (
      <BlogCard blog={blog} />
    ));

    return (
      <div className="BlogList">
        <p>Welcome to Microblog!</p>
        {blogs}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    blogs: reduxState.blogs
  };
}

export default connect(mapStateToProps)(BlogList);
