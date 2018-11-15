// Connected component for rendering BlogList component for all blog posts

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';

class BlogListPage extends Component {
  render() {
    return (
      <div className="BlogListPage">
        <p>Welcome to Microblog!</p>
        <BlogList blogs={this.props.blogs} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    blogs: reduxState.blogs
  };
}

export default connect(mapStateToProps)(BlogListPage);
