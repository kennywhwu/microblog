// Component to render CommentList and CommentForm components

import React, { Component } from 'react';
// import from
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentContainer extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    return (
      <div className="CommentContainer">
        <h3>Comments</h3>
        <CommentList
          comments={this.props.comments}
          handleDelete={this.props.handleDelete}
        />
        <CommentForm handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default CommentContainer;
