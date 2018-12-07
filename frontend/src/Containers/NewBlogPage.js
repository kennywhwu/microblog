// Connected component for page that displays and handles blog form for adding blog

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogForm from '../Components/BlogForm';
import { addBlogPostToAPI } from '../actionCreators';

class NewBlogPage extends Component {
  constructor(props) {
    super(props);
    this.addBlog = this.addBlog.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
  }

  async addBlog(blog) {
    await this.props.addBlogPostToAPI(blog);
    this.props.history.push('/');
  }

  cancelAdd() {
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="NewBlogPage">
        {this.props.error && (
          <div>
            <i style={{ color: 'red' }}>{this.state.errorMessage}</i>
          </div>
        )}
        <BlogForm
          handleSubmit={this.addBlog}
          handleCancel={this.cancelAdd}
          blog={{ title: '', description: '', body: '' }}
        />
      </div>
    );
  }
}

// Retrieve error message if exists
function mapStateToProps(reduxState, ownProps) {
  return {
    error: reduxState.error,
  };
}

export default connect(
  mapStateToProps,
  { addBlogPostToAPI }
)(NewBlogPage);
