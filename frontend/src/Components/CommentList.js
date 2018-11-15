// Component to list all comments for specific blog post

import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import Comment from './Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    let comments = Object.keys(this.props.comments).map(key => (
      <Comment
        comment={this.props.comments[key]}
        id={key}
        key={key}
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
