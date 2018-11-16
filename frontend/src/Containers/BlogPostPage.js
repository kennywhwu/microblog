// Connected component for rendering specific blog post with editing/comment functionality

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteBlog,
  // addComment,
  deleteComment
} from '../actionCreators';
import BlogPost from '../Components/BlogPost';
import BlogForm from '../Components/BlogForm';
import CommentContainer from '../Components/CommentContainer';
import { getBlogPostFromAPI, editBlogPostToAPI } from '../actionCreators';

class BlogPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.switchEditing = this.switchEditing.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  async componentDidMount() {
    await this.props.getBlogPostFromAPI(this.props.match.params.postId);
  }

  // Set state to switch from rendering blog post details to blog form
  switchEditing() {
    this.setState({ isEditing: true });
  }

  // Delete blog from Redux store and redirect to BlogListPage
  deleteBlog() {
    this.props.deleteBlog(this.props.blog.id);
    this.props.history.push('/');
  }

  // Edit blog in Redux store with updated fields
  async editBlog(blog) {
    blog.id = this.props.blog.id;
    blog.comments = this.props.blog.comments;
    await this.props.editBlogPostToAPI(blog);
    this.setState({ isEditing: false });
  }

  // Set state to switch back from form to details
  cancelEdit() {
    this.setState({ isEditing: false });
  }

  // Add comment in Redux store for specific blog post
  addComment(comment) {
    comment.blog_id = this.props.blog.id;
    this.props.addComment(comment);
  }

  // Delete comment in Redux store for specific blog post
  deleteComment(id) {
    let comment = { id, blog_id: this.props.blog.id };
    this.props.deleteComment(comment);
  }

  render() {
    // If editing blog, render BlogForm component; otherwise render BlogPost component
    return (
      <div className="BlogPostPage">
        {!this.state.isEditing ? (
          <BlogPost
            handleEdit={this.switchEditing}
            handleDelete={this.deleteBlog}
            blog={this.props.blog}
          />
        ) : (
          <BlogForm
            handleSubmit={this.editBlog}
            handleCancel={this.cancelEdit}
            blog={this.props.blog}
          />
        )}
        <CommentContainer
          comments={this.props.blog.comments}
          handleSubmit={this.addComment}
          handleDelete={this.deleteComment}
        />
      </div>
    );
  }
}

// Retrieve only the specific blog identified by params from Redux store
function mapStateToProps(reduxState, ownProps) {
  return {
    blog: reduxState.blogPost
  };
}

export default connect(
  mapStateToProps,
  {
    deleteBlog,
    // addComment,
    deleteComment,
    getBlogPostFromAPI,
    editBlogPostToAPI
  }
)(BlogPostPage);
