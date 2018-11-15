// Connected component for page that displays and handles blog form for adding blog

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../actionCreators';
import BlogForm from '../Components/BlogForm';
import slugify from 'slugify';

class NewBlogPage extends Component {
  constructor(props) {
    super(props);
    this.addBlog = this.addBlog.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
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

  cancelAdd() {
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="NewBlogPage">
        <BlogForm
          handleSubmit={this.addBlog}
          handleCancel={this.cancelAdd}
          blog={{ title: '', description: '', body: '' }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addBlog }
)(NewBlogPage);
