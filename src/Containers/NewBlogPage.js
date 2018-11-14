// Page to display and handle blog form

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../actionCreators';
import BlogForm from '../Components/BlogForm';
// import uuid from 'uuid/v4';
import slugify from 'slugify';

class NewBlogPage extends Component {
  constructor(props) {
    super(props);
    this.addBlog = this.addBlog.bind(this);
  }

  // received from form
  // {
  //   title: '',
  //   description: '',
  //   body: ''
  // };

  // send to Redux
  // {
  //       id: 1,
  //       title: 'Blog 1 Title',
  //       description: 'Blog 1 desc',
  //       body: 'Blog 1 body',
  //       comments: {
  //         1: { text: 'Blog 1 comment 1' },
  //         2: { text: 'Blog 1 comment 2' }
  //       }
  //     }

  addBlog(blog) {
    this.props.addBlog({
      ...blog,
      id: slugify(blog.title, { lower: true }),
      comments: {}
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="NewBlogPage">
        <BlogForm handleSubmit={this.addBlog} />
      </div>
    );
  }
}

export default connect(
  null,
  { addBlog }
)(NewBlogPage);
