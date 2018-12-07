// Component to list all comments for specific blog post

import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import Comment from './Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };

  render() {
    let comments = this.props.comments.map(comment => (
      <Comment
        comment={comment.text}
        id={comment.id}
        key={comment.id}
        handleDelete={this.props.handleDelete}
      />
    ));

    return (
      <div className="CommentList">
        <ListGroup>{comments}</ListGroup>
      </div>
    );
  }
}

export default CommentList;
