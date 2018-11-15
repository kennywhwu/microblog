// Connected component for rendering specific blog post with editing/comment functionality

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  editBlog,
  deleteBlog,
  addComment,
  deleteComment
} from '../actionCreators';
import uuid from 'uuid/v4';
import BlogPost from '../Components/BlogPost';
import BlogForm from '../Components/BlogForm';
import CommentContainer from '../Components/CommentContainer';

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

  switchEditing() {
    this.setState({ isEditing: true });
  }

  deleteBlog() {
    this.props.deleteBlog(this.props.blog.id);
    this.props.history.push('/');
  }

  editBlog(blog) {
    blog.id = this.props.blog.id;
    blog.comments = this.props.blog.comments;
    this.props.editBlog(blog);
    this.setState({ isEditing: false });
  }

  cancelEdit() {
    this.setState({ isEditing: false });
  }

  addComment(comment) {
    comment.id = uuid();
    comment.blog_id = this.props.blog.id;
    this.props.addComment(comment);
  }

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
    blog: reduxState.blogs[ownProps.match.params.postId]
  };
}

export default connect(
  mapStateToProps,
  { editBlog, deleteBlog, addComment, deleteComment }
)(BlogPostPage);
